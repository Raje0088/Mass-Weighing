package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "logo_and_metadata")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LogoAndMetadata {
    @Id
    private String id;
    private String logoUrl;
    private String logoPublicId;
    private String siteTitle;
    private String siteDescription;
    private String metaKeywords;
    private String googleAnalyticsCode;
    private String rssFeedUrl;
    private String sitemapXml;
    private String robotsTxt;
}
