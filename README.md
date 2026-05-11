# sabaejazzfes2025

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A website showcasing the food and drink vendors for the Sabae Jazz Festival 2025, built with HTML, CSS, and a Deno script for data processing.

## Demo

- **[Live Site](https://code4fukui.github.io/sabaejazzfes2025/)**: A responsive, card-based view of the vendors.
- **[Data Viewer](https://code4fukui.github.io/sabaejazzfes2025/list.html)**: A simple table view of the raw data.

## Features

- **Dynamic Vendor List**: Vendor information is loaded directly from a CSV file.
- **Responsive Design**: The layout adapts to various screen sizes, from desktop to mobile.
- **Data Automation**: A Deno script (`data2csv.js`) automates the creation of the `shops.csv` data file from a structured directory of text and image files.
- **Open Data**: All vendor information is available as open data.

## Data Source

The vendor list is provided as open data, licensed under CC BY.

- **Data File**: [`shops.csv`](shops.csv)
- **Attribution**: [鯖江JAZZフェスティバル](https://sabaejazz.jp/)

## How to Update Data

The website's content is generated from files placed in a local `data/` directory. Follow these steps to add or update vendor information.

### Prerequisites

- [Deno](https://deno.land/) must be installed to run the data processing script.
- The following tools are recommended for preparing source files:
  - [docx2txt](https://github.com/code4fukui/docx2txt): To convert vendor descriptions from `.docx` to `.txt`.
  - [tojpg-mac](https://github.com/code4fukui/tojpg-mac): To resize and convert images to JPEG format.

### Steps

1.  **Prepare the Data Directory**:
    Create a local `data/` directory in the project root (this directory is ignored by Git). Organize the vendor information using the following structure:

    ```
    data/
    └── [category]/
        └── [vendor_name]/
            ├── description.txt
            ├── image1.jpg
            └── image2.png
    ```

    -   `[category]`: The vendor type (e.g., `飲食ブース`, `クラフトビール`).
    -   `[vendor_name]`: The name of the shop or booth.
    -   Place the vendor's description in a plain text file (`.txt`).
    -   Place one or more images (`.jpg`, `.jpeg`, `.png`) in the same folder.

2.  **Run the Processing Script**:
    Execute the Deno script from the project root. This script will read from the `data/` directory, generate `shops.csv`, and copy the images into the `img/` directory.

    ```bash
    deno run -A data2csv.js
    ```

3.  **Commit the Changes**:
    After the script runs successfully, commit the updated `shops.csv` file and the new images in the `img/` directory to the repository.

## License

[MIT License](LICENSE)