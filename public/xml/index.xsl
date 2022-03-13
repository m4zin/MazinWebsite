<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
    <xsl:template match="/">
        <html>
            <head>
                <title>LAB 7</title>
            </head>
            <body>
                <table class="table-auto border-b border-gray-200 shadow border-separate border bg-white">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="px-6 py-2 text-xl text-gray-500">Name</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Age</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Email</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Phone</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Post School</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Current University</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Work Experience</th>
                            <th class="px-6 py-2 text-xl text-gray-500">Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="CV">
                            <tr>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="Name"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="Age"/>
                                </td>
                                <td class="border px-8 text-center font-bold">    
                                    <xsl:value-of select="Email"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="Phone"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="PostSecondaryEducation"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="University"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="PTWorkDone"/>
                                </td>
                                <td class="border px-8 text-center font-bold">
                                    <xsl:value-of select="skills"/>
                                </td>    
                            </tr>
                        </xsl:for-each>    
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>   
</xsl:stylesheet>