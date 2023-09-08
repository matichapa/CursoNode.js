using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TP3Ejer10
{
    public partial class Form1 : Form
    {
        string opcionSeleccionada = "";
        string opcionSeleccionadaFinal = "";

        public Form1()
        {
            InitializeComponent();
        }

        private void btnConvertir_Click(object sender, EventArgs e)
        {
            int temperaturaInicial = (int)numericValor.Value;
            

        }

        private void lbInicial_ItemCheck(object sender, ItemCheckEventArgs e)
        {
            // Desmarca todas las demás opciones
            for (int i = 0; i < lbInicial.Items.Count; i++)
            {
                if (i != e.Index)
                {
                    lbInicial.SetItemCheckState(i, CheckState.Unchecked);
                                opcionSeleccionada = lbInicial.GetItemText(lbInicial.Items[e.Index]);

                }
            }
            opcionSeleccionada = lbInicial.GetItemText(lbInicial.Items[e.Index]);



        }

        private void lbFinal_ItemCheck(object sender, ItemCheckEventArgs e)
        {
            // Desmarca todas las demás opciones
            for (int i = 0; i < lbFinal.Items.Count; i++)
            {
                if (i != e.Index)
                {
                    lbFinal.SetItemCheckState(i, CheckState.Unchecked);

                }
            }
            if (opcionSeleccionada!="")
            {
                opcionSeleccionadaFinal = lbFinal.GetItemText(lbFinal.Items[e.Index]);

            }
            else
            {

            }

        }
    }
}
