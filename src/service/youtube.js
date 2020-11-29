/** @format */

import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3`,
      params: { key: key },
    });
  }

  async mostPopular() {
    const response = await this.youtube.get(`videos`, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 24,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get(`search`, {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 24,
      },
    });
    return response.data.items;
  }
}

export default Youtube;
