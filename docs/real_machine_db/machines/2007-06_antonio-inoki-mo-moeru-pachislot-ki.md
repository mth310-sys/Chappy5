# アントニオ猪木も燃えるパチスロ機

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: アントニオ猪木も燃えるパチスロ機
aliases:
- アントニオ猪木も燃える
- 猪木も燃える
manufacturer: HEIWABROS / 平和（製造系資料ではオリンピア系表記もあり）
releaseDate: 2007-06上旬（グリーンべると2007-04-06記事の納品予定を時系列本線。P-WORLDは導入開始2007-05とするためCONFLICT保持）
generation: 5号機初期
systemType: ボーナス + 完走型RT / REG後CZ

## 性能コア

payoutRateBySetting:
- パチマガスロマガ・シミュレート値: 設定1 96.40% / 設定2 98.93% / 設定3 101.16% / 設定4 103.30% / 設定5 105.76% / 設定6 107.66%
- 後年整理値: 設定1 95.60% / 設定2 97.85% / 設定3 101.88% / 設定4 103.77% / 設定5 105.93% / 設定6 107.61%

confidence: CONFLICT

note:
- 設定1〜5で差が無視できないため平均しない。パチマガスロマガはPAYOUT（シミュレート値）と明記。P-WORLDは機械割95.6〜107.6%のレンジを掲載し後年整理側と整合。

initialHitBySetting:
- 闘魂BIG: 全設定共通 1/5461.33
- 通常BIG: 設定1 1/399.61 / 設定2 1/390.10 / 設定3 1/381.02 / 設定4 1/368.18 / 設定5 1/352.34 / 設定6 1/341.33
- BIG合成: 設定1 1/372.36 / 設定2 1/364.09 / 設定3 1/356.17 / 設定4 1/344.93 / 設定5 1/330.99 / 設定6 1/321.25
- 闘魂REG: 全設定共通 1/8192.00
- 通常REG: 設定1 1/1170.29 / 設定2 1/923.04 / 設定3 1/771.01 / 設定4 1/704.69 / 設定5 1/648.87 / 設定6 1/612.49
- REG合成: 設定1 1/1024.00 / 設定2 1/829.57 / 設定3 1/704.69 / 設定4 1/648.87 / 設定5 1/601.25 / 設定6 1/569.88
- ボーナス合成（パチマガスロマガ）: 設定1 1/273.07 / 設定2 1/253.03 / 設定3 1/236.59 / 設定4 1/225.21 / 設定5 1/213.47 / 設定6 1/205.44

confidence: ANALYSIS_HIGH

note:
- 設定別各ボーナス確率はパチマガスロマガの精密値を採用。別攻略資料にボーナス合算1/240〜1/190との不整合値があるため、その合算値は採用せずCONFLICT候補として保持。

baseGamesPer50:
- UNVERIFIED

note:
- 「アントニオ猪木も燃えるパチスロ機 / 猪木も燃える / HEIWA / 平和」と「50枚 / 1000円 / 1k / ベース / コイン持ち / ゲーム数」を組み替えて再探索。パチマガスロマガの該当ページ自体が「1000円あたりのゲーム数 現在調査中」としており、比較可能な公開値を今回確定できずUNVERIFIED。

netIncrease:
- 修行RT: 約+0.6枚/G（2007年当時グリーンべると）
- P-WORLD: 約+0.7枚/G
- 後年整理: 約+0.65枚/G

confidence: CONFLICT

note:
- 約0.6 / 0.65 / 0.7枚/Gの資料差。丸め差の可能性はあるが定義を断定せず平均しない。

basicPayout:
- BIG: 約240枚
- REG: 約120枚
- 闘魂BIG: 約240枚 + 200G RT
- 通常BIG: 約240枚 + 100G RT
- REG後: 8GのCZ「闘魂挑戦」。特殊リプレイ成立で100G RTへ

confidence: ANALYSIS_HIGH

note:
- BIG/REG約240/120枚はパチマガスロマガ、P-WORLD、当時グリーンべるとで整合。

modeSpecificMinimumData:
- ボーナスは闘魂BIG / 通常BIG / 闘魂REG / 通常REGの4種類。
- BIG後は必ず完走型RTへ。闘魂BIG後200G、通常BIG後100G。
- REG後は8GのCZ「闘魂挑戦」。特殊リプレイ（リプレイ・リプレイ・ベル）成立で100G RT「修行RT」へ。
- RTは規定G完走型。内部ボーナス成立後も基本的にボーナスを揃えるまで継続できるが、「道」演出発生時はRT終了とされる。
- 通常時ゲーム数天井はなし。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 本機固有の設定変更時に、RT/CZ状態・残りG・内部状態をどのように処理するかを確定できる高信頼公開資料は今回UNVERIFIED。
- 設定変更専用の短縮天井・朝一専用初当たり優遇はNONE_CONFIRMED。

carryOverBehavior:
- 通常時ゲーム数天井はないため、通常時天井ゲーム数の据え置き引継ぎはNOT_APPLICABLE。
- 前日RT/CZ中の据え置き時に残G・内部状態を保持するかは、機種名表記揺れ、RT/CZ名、据え置き関連語を変えて再探索したがUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでRT/CZ残G・内部状態を維持するかはUNVERIFIED。
- P-WORLD掲示板に電源OFF時の内部状態について質問投稿は残るが、掲示板質問自体は根拠として採用しない。

gameCounterReset:
- 通常時ゲーム数天井なし。NOT_APPLICABLE。

ceilingAfterReset:
- 天井なし。NOT_APPLICABLE。

modeAfterReset:
- 通常時のゲーム数管理モード、朝一専用ゲーム数モード、設定変更時モード再抽選の公開根拠はNONE_CONFIRMED / UNVERIFIED。

stateAfterReset:
- RT/CZ状態の設定変更時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一専用初当たり/CZ優遇、公開朝一恩恵数値はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、ゲーム数挙動による設定変更判別は、表記揺れ・「設定変更/リセット/朝一/据え置き/ガックン」を組み替えた十分な再探索後もUNVERIFIED。

numericResetData:
- 短縮天井: NOT_APPLICABLE
- 朝一当選率/モード振り分け/リセット恩恵発生率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-08-31

1. グリーンべると — SS第3弾は黄門ちゃま、猪木の5号機も
   - https://web-greenbelt.jp/00004124/
   - 2007-04-04発表内覧会、パチスロ猪木は6月上旬から納品、2種BIG約240枚+RT200/100G、2種REG約120枚、REG後8G CZ、RT純増約0.6枚/G。
   - reliability: INDUSTRY
2. P-WORLD — アントニオ猪木も燃えるパチスロ機
   - https://www.p-world.co.jp/machine/database/4688
   - 型式名、検定番号6S1499、導入開始2007年05月、機械割95.6〜107.6%、BIG約240枚/REG約120枚、RT約0.7枚/G、BIG後RT・REG後CZ構造。
   - reliability: INDUSTRY_DB
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/a.php
   - BIG約240枚、REG約120枚、BIG後RT、REG後CZ。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/h-1.php
   - 設定別4種ボーナス、BIG/REG/全ボーナス合算、PAYOUTシミュレート値。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役出現確率・通常時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/04/c.php
   - 1000円あたりゲーム数が「現在調査中」であることを確認。
   - reliability: ANALYSIS_HIGH
6. パチスロ救急車 — アントニオ猪木も燃えるパチスロ機
   - https://www.eightbeat.com/slot99/kishu/a_gyou/a/antonmomoeru5/page_menu.html
   - 2007.06、天井なし、RT約+0.6枚/G、設定別ボーナス/機械割整理。ボーナス合算はパチマガスロマガと不整合のため採用せず競合候補。
   - reliability: ANALYSIS_SINGLE
7. 後年猪木シリーズ整理
   - https://www.marimo0925.net/pachisuro-rekidai-ranking-inoki/
   - 設定別機械割95.60〜107.61%、RT約0.65枚/G、BIG/REG・CZ構造。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- 設定変更時のRT/CZ状態・残G処理
- 据え置き時のRT/CZ状態・残G引継ぎ
- 電源OFF→ONのみの内部状態処理
- 本機固有のガックン/朝一変更判別
- 公開朝一専用数値

## conflicts

- 導入時期: P-WORLDは「導入開始 2007年05月」、2007-04-06グリーンべるとは「納品は6月上旬から」。発表/DB月と納品開始の定義差も考えられるが推測せず双方保持。時系列本線は具体的な当時納品予定を優先して2007-06上旬。
- 機械割: パチマガスロマガ・シミュレート96.40/98.93/101.16/103.30/105.76/107.66%に対し、後年整理95.60/97.85/101.88/103.77/105.93/107.61%。平均しない。
- RT純増: 当時グリーンべると約0.6枚/G、後年整理約0.65枚/G、P-WORLD約0.7枚/G。平均しない。
- ボーナス合算: パチマガスロマガ1/273.07〜1/205.44に対し、パチスロ救急車は1/240〜1/190。個別BIG/REG確率との整合性から本線はパチマガスロマガ精密値とし、後者はCONFLICT候補として保持。

## QA note

- 2007年5月/6月境界を再監査。P-WORLDの2007年05月表記だけで5月へ固定せず、当時業界一次系の「6月上旬から納品」を優先して6月上旬の未処理機として登録。
- 性能コアは設定別ボーナス、機械割、RT純増、獲得枚数を取得。50枚ベース未確定のためPARTIAL。
- resetBehaviorは天井なし/有利区間非該当まで確定。本機固有のRT/CZ残G・内部状態処理、電断、据え置き、ガックンは十分再探索後もUNVERIFIED。
