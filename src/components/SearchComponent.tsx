import { useState, useEffect } from "react";
import StyledSearchComponent, {
	StyledSearchModal,
} from "../styles/SearchComponent.styled";
import { RiSearch2Line } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import { BreedListData } from "../utils/Types";
import { MockBreedList } from "../utils/Helpers";

const SearchComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openSearchList, setOpenSearchList] = useState(false);
	const [breedList, setBreedList] = useState<BreedListData[]>([]);
	const [filterBreedList, setFilteredBreedList] = useState<BreedListData[]>(
		[]
	);
	const [isLoading, setIsLoading] = useState(false);
	const [errorOccurred, setErrorOccuured] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.currentTarget.value.toLowerCase();
		console.log(searchValue);
		if (searchValue === "") {
			setFilteredBreedList([]);
		} else {
			const filterData = breedList.filter((breed) =>
				breed.name.toLowerCase().includes(searchValue)
			);
			setFilteredBreedList(filterData);
		}
	};

	useEffect(() => {
		//TODO: Fetch a list of breeds and map to a state
		setIsLoading(true);
		setTimeout(() => {
			setBreedList(MockBreedList);
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<StyledSearchComponent>
			<div className="desktop-search">
				<input
					type="search"
					placeholder="Enter your Breed"
					onChange={handleChange}
				/>
				<RiSearch2Line />
				{/* Maybe it will better to render when the input value is not empty */}
				{filterBreedList.length !== 0 &&
					renderSearchArray(filterBreedList, isLoading, errorOccurred)}
			</div>

			<div className="mobile-search">
				<button onClick={() => setIsModalOpen(true)}>Search</button>
				<RiSearch2Line />
			</div>

			<Dialog
				open={isModalOpen}
				// To disable keyboard automatically closing the modal
				// onClose={handleClose}
				// fullScreen
				fullWidth
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					borderRadius: "10px",
					margin: 0,
				}}
			>
				<StyledSearchModal>
					<div className="row">
						<div className="col-12 modal-close">
							<span onClick={() => setIsModalOpen(false)}>
								&#128473;
							</span>
						</div>
					</div>

					<div className="row mt-4">
						<div className="col-12">
							<div className="desktop-search">
								<input
									type="search"
									placeholder="Enter your Breed"
									onClick={() => setOpenSearchList(true)}
								/>
								<RiSearch2Line />

								{/* Maybe it will better to render when the input value is not empty */}
								{filterBreedList.length !== 0 &&
									renderSearchArray(
										filterBreedList,
										isLoading,
										errorOccurred
									)}
							</div>
						</div>
					</div>
				</StyledSearchModal>
			</Dialog>
		</StyledSearchComponent>
	);
};

const renderSearchArray = (
	data: BreedListData[],
	dataLoading: boolean,
	dataError: boolean
) => {
	return (
		<div className="search-list-container">
			{dataLoading ? (
				<p>Loading Data</p>
			) : dataError ? (
				<p>Unable to Load Data</p>
			) : (
				data.map((ele, index) => (
					<a href="£" key={index}>
						<p>{ele.name}</p>
					</a>
				))
			)}
		</div>
	);
};

export default SearchComponent;
