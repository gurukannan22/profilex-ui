### Displaying Certificates
You have two options to display certificates:

#### Option 1: Google Drive (Recommended for easy updates)
1.  **Upload** your certificate to Google Drive.
2.  **Share** the file: Right-click -> Share -> "Anyone with the link".
3.  **Copy Link**: It will look like `https://drive.google.com/file/d/123xyz.../view`.
4.  **Paste** this link into your `src/data/portfolio.json`:
    ```json
    "certificate": "https://drive.google.com/file/d/123xyz.../view"
    ```
    *The website will automatically convert this to a visible image.*

#### Option 2: Local File
1.  **Rename** your image to `nss-certificate.jpg`.
2.  **Move** it to: `/Users/gurukannan/My Codespaces/profilex-ui/public/certifications/`.
3.  **Update JSON**:
    ```json
    "certificate": "/certifications/nss-certificate.jpg"
    ```
