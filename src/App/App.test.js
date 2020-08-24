import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
import React from 'react';
import App from './App';
import Posters from '../Posters/Posters.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import MovieInfo from '../MovieInfo/MovieInfo.js';
import sampleMovies from '../sampleMovies.js';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import dataFetcher from '../dataFetcher.js';
import '@testing-library/jest-dom';
jest.mock('../dataFetcher.js');

describe('App', () => {
  it('display all movies when the page loads', async () => {
    dataFetcher.getAllMovies.mockResolvedValueOnce(sampleMovies);

    render(<App />);

    const movie1 = await waitFor(() => screen.getByAltText('Greenland'));
    const movie2 = await waitFor(() => screen.getByAltText('Archive'));
    const movie3 = await waitFor(() => screen.getByAltText('Akira'));
    const movie4 = await waitFor(() => screen.getByAltText('Friend of the World'));
    const movie5 = await waitFor(() => screen.getByAltText('The Secret Garden'));

    expect(movie1).toBeInTheDocument();
    expect(movie2).toBeInTheDocument();
    expect(movie3).toBeInTheDocument();
    expect(movie4).toBeInTheDocument();
    expect(movie5).toBeInTheDocument();
  })
})
