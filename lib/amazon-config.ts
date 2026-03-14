// Amazon Associates Configuration

export const AMAZON_CONFIG = {
    // Replace with your Amazon Associates Tag ID
    // Get yours at: https://affiliate-program.amazon.com/
    tagId: "ciclodehabitos-20", // PLACEHOLDER - Replace with your actual tag

    // Amazon domain (change based on your target market)
    domain: "amazon.com", // Use amazon.es for Spain, amazon.com.mx for Mexico, etc.
};

/**
 * Generates an Amazon affiliate link
 * @param asin - Amazon Standard Identification Number (product ID)
 * @returns Full affiliate URL
 */
export function getAmazonAffiliateUrl(asin: string): string {
    return `https://www.${AMAZON_CONFIG.domain}/dp/${asin}/?tag=${AMAZON_CONFIG.tagId}`;
}

/**
 * Extracts ASIN from Amazon URL
 * @param url - Amazon product URL
 * @returns ASIN or null if not found
 */
export function extractAsinFromUrl(url: string): string | null {
    const match = url.match(/\/dp\/([A-Z0-9]{10})/);
    return match ? match[1] : null;
}
