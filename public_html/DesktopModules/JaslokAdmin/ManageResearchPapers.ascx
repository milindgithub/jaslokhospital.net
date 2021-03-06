﻿<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ManageResearchPapers.ascx.cs" Inherits="DesktopModules_JaslokAdmin_ManageResearchPapers" EnableViewState="true" %>
<script>
    function getFileData(myFile) {
        debugger;
        var file = myFile.files[0];
        var filename = file.name;
        var lbl = document.getElementById("<%= listofuploadedfiles.ClientID %>");

        lbl.innerHTML = filename;

    }
    function getFilePDFData(myFile) {
        debugger;
        var file = myFile.files[0];
        var filename1 = file.name;
        var lbl1 = document.getElementById("<%=listofuploadedpdffiles.ClientID%>");
        lbl1.innerHTML = filename1;

    }
</script>
<h2>Manage Research Papers</h2>
<div class="border-3"></div>
<div class="border-3"></div>
<div class="border-3"></div>
<asp:PlaceHolder ID="plcView" runat="server">
    <asp:Label ID="lblMessage" Visible="false" runat="server" />
    <br />
    <br />
    <asp:Button ID="btnAdd" runat="server" Text="Add New Research Papers" CssClass="btn btn-default" OnClick="btnAdd_Click" />
    <table cellpadding="4" cellspacing="4" width="100%">
        <tr>
            <td colspan="2">&nbsp;</td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:Label ID="lblempty" Visible="false" runat="server" Text="No Record Found" Style="font-size: larger;"></asp:Label>
                <asp:DataGrid ID="dgResearchPapers" runat="server" AutoGenerateColumns="False" Width="100%" PageSize="10" AllowPaging="true"
                    CssClass="normaltable22user" OnItemDataBound="dgResearchPapers_ItemDataBound"
                    DataKeyField="Id" OnItemCommand="dgResearchPapers_ItemCommand" ViewStateMode="Enabled" OnPageIndexChanged="dgResearchPapers_PageIndexChanging">

                    <HeaderStyle Wrap="False" CssClass="normaltableheadercelluser" HorizontalAlign="Center"></HeaderStyle>
                    <ItemStyle HorizontalAlign="Center" CssClass="normaltablecelluser"></ItemStyle>
                    <PagerStyle HorizontalAlign="Left" BorderStyle="None" BorderWidth="0" Position="Bottom"
                        Mode="NumericPages" CssClass="normaltableheadercelluser" />
                    <Columns>
                        <asp:TemplateColumn HeaderText="Thumbnail Images" ItemStyle-Width="5%">
                            <ItemTemplate>
                                <asp:Image ID="ImageUrl" runat="server" Height="50px" />
                            </ItemTemplate>
                        </asp:TemplateColumn>
                        <asp:BoundColumn DataField="Title" HeaderText="Title" ItemStyle-HorizontalAlign="Justify"></asp:BoundColumn>
                        <asp:BoundColumn DataField="ResearchPaperPDF" HeaderText="Research Papers PDF" ItemStyle-HorizontalAlign="Justify"></asp:BoundColumn>

                         <asp:TemplateColumn HeaderText="Edit" ItemStyle-Width="5%">
                            <HeaderStyle Font-Bold="True" HorizontalAlign="Center" VerticalAlign="Middle"></HeaderStyle>
                            <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle"></ItemStyle>
                            <ItemTemplate>
                                <asp:ImageButton CommandName="Update" CommandArgument='<%# Eval("Id") %>' runat="server" ImageUrl="../../images/edit.gif" AlternateText="click here to edit." ID="imgbtnEdit"></asp:ImageButton>
                            </ItemTemplate>
                        </asp:TemplateColumn>

                        <asp:TemplateColumn HeaderText="Delete" ItemStyle-Width="5%">
                            <HeaderStyle Font-Bold="True" HorizontalAlign="Center" Width="60px"></HeaderStyle>
                            <ItemStyle HorizontalAlign="Center"></ItemStyle>
                            <ItemTemplate>
                                <asp:ImageButton CommandName="Delete" runat="server" OnClientClick="return confirm('Are you sure you want to delete this record?')" CommandArgument='<%# Eval("Id") %>' ImageUrl="../../images/delete.gif" AlternateText="click here to Delete."
                                    ID="ImagebtnDelete"></asp:ImageButton>
                            </ItemTemplate>
                        </asp:TemplateColumn>
                    </Columns>
                    <HeaderStyle Wrap="False" CssClass="normaltableheadercelluser" HorizontalAlign="Center"></HeaderStyle>
                    <ItemStyle HorizontalAlign="Center" CssClass="normaltablecelluser"></ItemStyle>
                    <PagerStyle HorizontalAlign="Left" BorderStyle="None" BorderWidth="0" Position="Bottom"
                        Mode="NumericPages" CssClass="normaltableheadercelluser" />

                </asp:DataGrid>
                <asp:HiddenField ID="hdnPDFPathP" runat="server" />
                <asp:HiddenField ID="hdnImagePathP" runat="server" />
            </td>
        </tr>
    </table>
    <div style="margin-bottom: 5%"></div>
</asp:PlaceHolder>


<asp:PlaceHolder ID="plcAdd" runat="server" Visible="false">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

        <div class="form-horizontal">
            <div class="row" style="width: 80%">
                <div class="col-md-6" style="text-align: right;">
                    <label for="">Title:</label>
                </div>
                <div class="col-md-6" style="text-align: left;">
                    <asp:TextBox ID="txtTitle" runat="server"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="rfvtxtTitle" runat="server" ErrorMessage="Please Enter Title" ControlToValidate="txtTitle"
                        Display="Dynamic" ValidationGroup="JHCat" ForeColor="Red"></asp:RequiredFieldValidator>

                </div>
            </div>

            <div class="row" style="width: 80%">
                <div class="col-md-6" style="text-align: right;">
                    <label for="">Thumbnail Image:</label>
                </div>
                <div class="col-md-6" style="text-align: left;">
                    <asp:FileUpload ID="FileUpload1" runat="server" onchange="getFileData(this);" Style="color: transparent;" />
                    <asp:Label ID="listofuploadedfiles" runat="server" />                   
                    <asp:RegularExpressionValidator ID="rexp" runat="server" ControlToValidate="FileUpload1" ForeColor="Red" ValidationGroup="JHCat" ErrorMessage="Only  .jpg, .png and .jpeg"
                        ValidationExpression="(.*\.([Gg][Ii][Ff])|.*\.([Jj][Pp][Gg])|.*\.([Bb][Mm][Pp])|.*\.([pP][nN][gG])|.*\.([tT][iI][iI][fF])$)"></asp:RegularExpressionValidator>

                </div>
            </div>
            <div class="row" style="width: 80%">
                <div class="col-md-6" style="text-align: right;">
                    <label for="">Research Papers PDF:</label>
                </div>
                <div class="col-md-6" style="text-align: left;">
                    <asp:FileUpload ID="FileUpload2" runat="server" onchange="getFilePDFData(this);" Style="color: transparent;"/>
                    <asp:Label ID="listofuploadedpdffiles" runat="server" />                   
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="FileUpload2" ForeColor="Red" ValidationGroup="JHCat" ErrorMessage="Only  .pdf"
                        ValidationExpression="(.*\.([Pp][Dd][Ff])$)"></asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="col-xs-12" style="text-align: center">
                <asp:Button ID="btnUpload" runat="server" ValidationGroup="JHCat" Text="Upload" OnClick="Upload" />&nbsp;&nbsp;
                <asp:Button ID="btncancel" runat="server" Text="Cancel" OnClick="Cancel"/>
            </div>
            
            <asp:HiddenField ID="hdnThumbnail" runat="server" />
            <asp:HiddenField ID="hdnResearchPapersPDF" runat="server" />
            <asp:HiddenField ID="hdnImagePath" runat="server" />
            <asp:HiddenField ID="hdnPDFPath" runat="server" />

        </div>

    </div>

</asp:PlaceHolder>
