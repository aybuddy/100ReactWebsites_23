import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Philadelphia Art Museum',
    description:
      'The Philadelphia Museum of Art is an art museum originally chartered in 1876 for the Centennial Exposition in Philadelphia.',
    imageUrl:
      'https://images.unsplash.com/photo-1544295699-624f04212074?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130',
    location: {
      lat: 39.9655697,
      lng: -75.1831548,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Philadelphia Art Museum',
    description:
      'The Philadelphia Museum of Art is an art museum originally chartered in 1876 for the Centennial Exposition in Philadelphia.',
    imageUrl:
      'https://images.unsplash.com/photo-1565801824680-f56daeeab282?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130',
    location: {
      lat: 39.9655697,
      lng: -75.1831548,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
