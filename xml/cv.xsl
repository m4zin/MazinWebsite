<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:template match="/">
        <html>
            <head>
                <title>LAB 7</title>
            </head>
            <body>
                <h1 class="heading-xsl">CURRICULUM VITAE</h1>
                <xsl:for-each select="CV">
                    <xsl:value-of select="Name"/>
                    <xsl:value-of select="Age"/>
                    <xsl:value-of select="Email"/>
                    <xsl:value-of select="Phone"/>
                    <xsl:value-of select="PostSecondaryEducation"/>
                    <xsl:value-of select="University"/>
                    <xsl:value-of select="PTWorkDone"/>
                    <xsl:value-of select="skills"/>
                </xsl:for-each>  
            </body>
        </html>
    </xsl:template>   
</xsl:stylesheet>