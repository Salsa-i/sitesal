from playwright.sync_api import Page, expect
import os

def test_starry_background(page: Page):
    """
    This test verifies that the starry background is rendered correctly.
    """
    # 1. Arrange: Go to the local index.html file.
    # Get the absolute path to the file
    file_path = os.path.abspath("index.html")
    page.goto(f"file://{file_path}")

    # 2. Wait for the page to load
    page.wait_for_timeout(2000) # 2 second wait

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")