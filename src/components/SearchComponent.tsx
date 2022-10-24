import { useState } from "react";
import StyledSearchComponent, {
	StyledSearchModal,
} from "../styles/SearchComponent.styled";
import { RiSearch2Line } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";

const SearchComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [openSearchList, setOpenSearchList] = useState(false);

	return (
		<StyledSearchComponent>
			<div className="desktop-search">
				<input
					type="search"
					placeholder="Enter your Breed"
					onClick={() => setOpenSearchList(true)}
				/>
				<RiSearch2Line />
				{/* Maybe it will better to render when the input value is not empty */}
				{openSearchList && renderSearchArray()}
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
								{openSearchList && renderSearchArray()}
							</div>
						</div>
					</div>
				</StyledSearchModal>
			</Dialog>
		</StyledSearchComponent>
	);
};

const renderSearchArray = () => {
	return (
		<div className="search-list-container">
			{/* TODO: Render search results here, if empty put no data */}
			<a href="£">
				<p>Bengal</p>
			</a>
			<a href="£">
				<p>Bengal</p>
			</a>
			<a href="£">
				<p>Bengal</p>
			</a>
			<a href="£">
				<p>Bengal</p>
			</a>
			<a href="£">
				<p>Bengal</p>
			</a>
		</div>
	);
};

export default SearchComponent;
