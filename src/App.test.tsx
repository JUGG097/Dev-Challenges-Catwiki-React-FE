import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import { MockCatDetailData } from "./utils/Helpers";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Landing Page Rendering", () => {
	test("Header Component gets rendered", async () => {
		const MockTopTenFailedCall: AxiosError = {
			config: {},
			isAxiosError: true,
			toJSON: () => Object,
			name: "",
			message: "",
		};

		mockedAxios.get.mockResolvedValue(MockTopTenFailedCall);

		render(<App />, { wrapper: BrowserRouter });
		expect(screen.getByAltText("Site Logo")).toBeInTheDocument();
		expect(await screen.findByAltText("Error Icon")).toBeInTheDocument();
	});

	test("Section Headings get rendered", async () => {
		const MockTopTenFailedCall: AxiosError = {
			config: {},
			isAxiosError: true,
			toJSON: () => Object,
			name: "",
			message: "",
		};

		mockedAxios.get.mockResolvedValue(MockTopTenFailedCall);

		render(<App />, { wrapper: BrowserRouter });
		expect(
			screen.getByText("Get to know more about about your cat breed")
		).toBeInTheDocument();
		expect(screen.getByText("Most Searched Breeds")).toBeInTheDocument();
		expect(
			screen.getByText("66+ Breeds For you to discover")
		).toBeInTheDocument();
		expect(
			screen.getByText("Why should you have a cat?")
		).toBeInTheDocument();
		expect(
			screen.getByPlaceholderText("Enter your Breed")
		).toBeInTheDocument();
		expect(await screen.findByAltText("Error Icon")).toBeInTheDocument();
	});

	test("Footer Component gets rendered", async () => {
		const MockTopTenFailedCall: AxiosError = {
			config: {},
			isAxiosError: true,
			toJSON: () => Object,
			name: "",
			message: "",
		};

		mockedAxios.get.mockResolvedValue(MockTopTenFailedCall);

		render(<App />, { wrapper: BrowserRouter });
		expect(screen.getByAltText("Cat Wiki Logo")).toBeInTheDocument();
		expect(
			screen.getByText("© created by Adeoluwa Adeboye - devChallenge.io")
		).toBeInTheDocument();
		expect(await screen.findByAltText("Error Icon")).toBeInTheDocument();
	});

	test("Cat Images Load after API call", async () => {
		const MockTopTenCall: AxiosResponse = {
			data: {
				success: true,
				data: MockCatDetailData,
			},
			status: 200,
			headers: {},
			config: {},
			statusText: "OK",
		};

		mockedAxios.get.mockResolvedValue(MockTopTenCall);

		render(<App />, { wrapper: BrowserRouter });
		expect(await screen.findAllByAltText("Cat breed")).toHaveLength(
			MockCatDetailData.length
		);
	});
});

describe("Most Searched Page Rendering", () => {
	beforeEach(() => {
		const MockTopTenCall: AxiosResponse = {
			data: {
				success: true,
				data: MockCatDetailData,
			},
			status: 200,
			headers: {},
			config: {},
			statusText: "OK",
		};

		mockedAxios.get.mockResolvedValue(MockTopTenCall);
	});
	test("Header and Footer Component gets rendered", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		);
		expect(await screen.findAllByAltText("Cat breed")).toHaveLength(
			MockCatDetailData.length
		);

		// User switches to most searched page
		userEvent.click(screen.getByText("SEE MORE"));
		expect(screen.getByAltText("Site Logo")).toBeInTheDocument();
		expect(
			screen.getByText("© created by Adeoluwa Adeboye - devChallenge.io")
		).toBeInTheDocument();
	});

	test("Cats Info gets rendered", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		);
		expect(await screen.findAllByAltText("Cat breed")).toHaveLength(
			MockCatDetailData.length
		);

		// User switches to most searched page
		userEvent.click(screen.getByText("SEE MORE"));
		expect(
			screen.getByText("Top 10 most searched breeds")
		).toBeInTheDocument();
		expect(await screen.findAllByAltText("Cat breed")).toHaveLength(
			MockCatDetailData.length
		);
	});
});

describe("Cat Details Page Rendering", () => {
	beforeEach(() => {
		const MockTopTenCall: AxiosResponse = {
			data: {
				success: true,
				data: MockCatDetailData,
			},
			status: 200,
			headers: {},
			config: {},
			statusText: "OK",
		};

		const MockCatDetailsCall: AxiosResponse = {
			data: {
				success: true,
				data: MockCatDetailData[0],
			},
			status: 200,
			headers: {},
			config: {},
			statusText: "OK",
		};

		const MockCatPhotosCall: AxiosResponse = {
			data: {
				success: true,
				data: [MockCatDetailData[0].image],
			},
			status: 200,
			headers: {},
			config: {},
			statusText: "OK",
		};


    // This order matters apparently, just refresh page on browser and see how requests are called

    // For future testing might be better to create a mock server...checkout (wsw)
		mockedAxios.get.mockResolvedValueOnce(MockCatDetailsCall);
		mockedAxios.get.mockResolvedValueOnce(MockTopTenCall);
		mockedAxios.get.mockResolvedValueOnce(MockCatPhotosCall);
	});

	test("Cat Details Page gets rendered", async () => {
		render(
			<MemoryRouter
				initialEntries={["/details/" + MockCatDetailData[0].name]}
			>
				<App />
			</MemoryRouter>
		);

		expect(screen.getByText("Other Photos")).toBeInTheDocument();

    expect((await screen.findAllByAltText("Cat breed")).length).toBeGreaterThan(1)

    expect(screen.getByText(MockCatDetailData[0].description)).toBeInTheDocument()

	});
});
