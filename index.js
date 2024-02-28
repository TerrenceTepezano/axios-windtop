import request from 'axios-low-encapsulation/';
import axios from 'axios';
import commander from 'commander';

const http = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const dedc = commander.Command;

export default {
  async get(url) {
    try {
      const response = await request.get(url);
      return response;
    } catch (err) {
      return false;
    }
  },
  async post(url, send) {
    try {
      const response = await request.post(url, send);
      return response;
    } catch (err) {
      return false;
    }
  },
}