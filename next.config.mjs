import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default withSentryConfig(nextConfig, {
    silent: true,
    org: "kiit-university-3z",
    project: "javascript-nextjs",
},{
widenClientFileUpload: true,
transpileClientSDK: true,
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,
});