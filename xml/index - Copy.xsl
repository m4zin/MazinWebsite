<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:template match="/">
        <html>
            <head>
                <title>LAB 7</title>
            </head>
            <body>
                <h1 style="color: green; padding-top: 19rem; padding-bottom: 10px;">CURRICULUM VITAE</h1>
                <table border="1">
                    <tr>
                        <th class="thFontSize">Name</th>
                        <th class="thFontSize">Age</th>
                        <th class="thFontSize">Email</th>
                        <th class="thFontSize">Phone</th>
                        <th class="thFontSize">PostSecondaryEducation</th>
                        <th class="thFontSize">Current University</th>
                        <th class="thFontSize">Work Experience</th>
                        <th class="thFontSize">Skills</th>
                    </tr>
                        <xsl:for-each select="CV">
                            <tr>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="Age"/>
                                </td>
                                <td class="thfontSizeDesc">    
                                    <xsl:value-of select="Email"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="Phone"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="PostSecondaryEducation"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="University"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="PTWorkDone"/>
                                </td>
                                <td class="thfontSizeDesc">
                                    <xsl:value-of select="skills"/>
                                </td>    
                            </tr>
                        </xsl:for-each>    
                </table>
            </body>
        </html>
    </xsl:template>   
</xsl:stylesheet>     
