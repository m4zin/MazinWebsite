<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:template match="/">
        <html>
            <head>
                <title>LAB 7</title>
            </head>
            <body>
                <h1 style="color: red;">Mazin's CV</h1>
                <table border="1">
                    <tr>
                        <th style="color:white;">Name</th>
                        <th style="color:white;">Age</th>
                        <th style="color:white;">Email</th>
                        <th style="color:white;">Phone</th>
                        <th style="color:white;">PostSecondaryEducation</th>
                        <th style="color:white;">University</th>
                        <th style="color:white;">PTWorkdDone</th>
                        <th style="color:white;">Skills</th>
                    </tr>
                        <xsl:for-each select="CV">
                            <tr>
                                <td style="color:white;">
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="Age"/>
                                </td>
                                <td style="color:white;">    
                                    <xsl:value-of select="Email"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="Phone"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="PostSecondaryEducation"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="University"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="PTWorkDone"/>
                                </td>
                                <td style="color:white;">
                                    <xsl:value-of select="skills"/>
                                </td>    
                            </tr>
                        </xsl:for-each>    
                </table>
            </body>
        </html>
    </xsl:template>   
</xsl:stylesheet>     
