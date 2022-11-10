import { useState, useEffect } from "react";
import StyledSearchComponent, {
	StyledSearchModal,
} from "../styles/SearchComponent.styled";
import { RiSearch2Line } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import { BreedListData } from "../utils/Types";
import axios from "axios";
import { Link } from "react-router-dom";

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
		if (searchValue === "") {
			setFilteredBreedList(breedList);
		} else {
			const filterData = breedList.filter((breed) =>
				breed.name.toLowerCase().includes(searchValue)
			);
			setFilteredBreedList(filterData);
		}
	};

	const handleOpenSearchList = (value: boolean) => {
		setOpenSearchList(value);
	};

	useEffect(() => {
		setErrorOccuured(false);
		setIsLoading(true);
		axios
			.get("https://catwiki.juggyprojects.com/api/v1/breedlist")
			.then((res) => {
				setBreedList(res.data.data);
				setFilteredBreedList(res.data.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setErrorOccuured(true);
				setIsLoading(false);
			});
	}, []);

	return (
		<StyledSearchComponent>
			<div className="desktop-search">
				<input
					type="search"
					placeholder="Enter your Breed"
					onChange={handleChange}
					onClick={() => setOpenSearchList(true)}
				/>
				<RiSearch2Line />
				{openSearchList &&
					renderSearchArray(
						filterBreedList,
						isLoading,
						errorOccurred,
						handleOpenSearchList
					)}
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
									onChange={handleChange}
									onClick={() => setOpenSearchList(true)}
								/>
								<RiSearch2Line />
								{openSearchList &&
									renderSearchArray(
										filterBreedList,
										isLoading,
										errorOccurred,
										handleOpenSearchList,
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
	dataError: boolean,
	handleOpenSearchList: (value: boolean) => void
) => {
	return (
		<div className="search-list-container">
			<span onClick={() => handleOpenSearchList(false)}>&#128473;</span>
			{dataLoading ? (
				<p>Loading Data...</p>
			) : dataError ? (
				<p>Unable to Load Data</p>
			) : data.length === 0 ? (
				<p>No Data Founds</p>
			) : (
				data.map((ele, index) => (
					<Link to={`/details/${ele.id}`} key={index}>
						<p>{ele.name}</p>
					</Link>
				))
			)}
		</div>
	);
};

export default SearchComponent;
