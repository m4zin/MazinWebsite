<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:template match="/">
                <h1>Mazin's CV</h1>
                <xsl:for-each select="CV">
                    <h1><xsl:value-of select="Name"/></h1>
                    <p>Age: <xsl:value-of select="Age"/></p>
                    <p>Email: <xsl:value-of select="Email"/></p>
                    <p>Phone: <xsl:value-of select="Phone"/></p>
                    <p>PostSecondaryEducation: <xsl:value-of select="PostSecondaryEducation"/></p>
                    <p>University: <xsl:value-of select="University"/></p>
                    <p>PTWorkDone: <xsl:value-of select="PTWorkDone"/></p>
                    <p>Skills: <xsl:value-of select="skills"/></p>
                </xsl:for-each>
    </xsl:template>   
</xsl:stylesheet>
