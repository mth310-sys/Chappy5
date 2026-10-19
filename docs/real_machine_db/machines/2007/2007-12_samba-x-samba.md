# サンバ×サンバ

machineName: サンバ×サンバ
manufacturer: KPE
releaseDate: 2007-12
generation: 5号機
systemType: ボーナス+RT/ART / 同時成立あり
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## identification

- コナミアミューズメント公式機種アーカイブで `SAMBA × SAMBA`、稼働開始2007年12月、5号機 RT/ART、©KPEを確認。
- P-WORLDで型式名 `サンバアンドサンバＪＡ`、メーカーKPE、2007年12月導入を確認。
- 5号機クロニクルでもKPEの2007/12導入機として `サンバ×サンバ（サンバアンドサンバ）` を確認。
- 2007年6月11日東京都公安委員会告示の検定情報にもKPE `サンバアンドサンバJA` が掲載されている後年保存記録を確認。

## payoutRateBySetting

`UNVERIFIED_AFTER_RESEARCH`。

5号機クロニクルは本機の設定1〜6機械割欄を「不明」としており、パチマガスロマガのPAYOUT欄も現存ページでは「現在調査中」。機種名 / 型式名 / KPE / 機械割 / PAYOUT / 設定1〜6などへ検索語を変えたが、信頼できる設定別機械割数列を確定できなかった。

## initialHitBySetting

### BIG

全設定共通: `1/304.82`

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/354.25 |
| 2 | 1/350.46 |
| 3 | 1/346.75 |
| 4 | 1/343.12 |
| 5 | 1/339.56 |
| 6 | 1/336.08 |

### ボーナス合成

| 設定 | 合成 |
|---|---:|
| 1 | 1/163.84 |
| 2 | 1/163.02 |
| 3 | 1/162.22 |
| 4 | 1/161.42 |
| 5 | 1/160.63 |
| 6 | 1/159.84 |

パチマガスロマガ解析値。別ページにメーカー発表値として合成 `1/164 / 1/163 / 1/162 / 1/161 / 1/161 / 1/160` が掲載されており、解析値の丸めと整合。P-WORLDも設定1約1/164〜設定6約1/160を掲載。

信頼度: `ANALYSIS_HIGH`。

## baseGamesPer50

`UNVERIFIED_AFTER_RESEARCH`。

パチマガスロマガの小役/1000円ゲーム数ページは現存するが、通常時小役確率・1000円あたりゲーム数とも「現在調査中」。機種名 / 型式名 / 50枚 / 1000円 / ベース / コイン持ちを変えて再探索したが、比較可能な直接数値を確定できなかった。

## netIncrease

- RT / ART搭載はコナミ公式、P-WORLD、パチマガスロマガで確認。
- パチマガスロマガは「斬新なARTシステム」「ARTとボーナスのループ率は80%にもなる」と説明。
- P-WORLD当時掲示板には「無限ART」への言及があるが、ユーザー投稿のため構造確認の補助に留める。
- ARTの1Gあたり純増枚数は、今回の再探索では信頼できる直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## basicPayout

パチマガスロマガ掲載:

- BIG: 253枚を超える払い出しで終了 / 純増約208枚
- REG: 69枚を超える払い出しで終了 / 純増約56枚

P-WORLDもBIG 253枚超、BONUS GAME 69枚超払い出し終了を掲載し、規定払い出し枚数は照合一致。

## modeSpecificMinimumData

- 同時成立あり / RT / ART。
- ARTとボーナスのループ率は最大約80%と当時パチマガスロマガが記載。
- 通常時に複数の滞在モードが存在したことは、P-WORLD当時掲示板の「滞在モードの判別要素が雑誌掲載」記録から補助確認できる。ただしモード移行テーブル全体は本DB収集対象外。
- 同時成立の例としてパチマガスロマガではリプレイ、スイカ、共通9枚役との同時成立解析が残るが、物差し目的に不要な全小役詳細は転記しない。

## resetBehavior

### settingChangeBehavior

`UNVERIFIED_AFTER_RESEARCH`。

`サンバ×サンバ / SAMBA×SAMBA / サンバアンドサンバJA / KPE` と `設定変更 / リセット / 朝一 / 据え置き / RAM / ART / モード` を組み替え、公式アーカイブ、P-WORLD、パチマガスロマガ、5号機DB、検定資料、後年回顧を横断したが、設定変更時にART・RT・滞在モード・内部状態をどのように処理するかを直接説明する資料を確定できなかった。

### carryOverBehavior

`UNVERIFIED_AFTER_RESEARCH`。

据え置き時のART/RT状態、残G、通常時滞在モードの引継ぎ有無を直接説明する資料は確認できなかった。

### powerCycleBehavior

`UNVERIFIED_AFTER_RESEARCH`。

電源OFF→ONのみの場合のART/RT状態、モード、内部ゲーム数、初期出目等の本機固有挙動は確認できなかった。

### gameCounterReset

- 通常時のゲーム数天井: `NONE_CONFIRMED`
- 設定変更時の天井ゲーム数リセット/引継ぎ: `NOT_APPLICABLE / NONE_CONFIRMED`
- ART/RT内部ゲーム数・残Gのリセット/引継ぎ: `UNVERIFIED_AFTER_RESEARCH`

### ceilingAfterReset

通常時ゲーム数天井、リセット短縮天井、朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset

通常時に滞在モードが存在した形跡は確認できるが、設定変更時の再抽選 / 据え置き時引継ぎ / 朝一専用モード / 設定変更専用振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

RT / ART搭載機のため `NOT_APPLICABLE` ではない。

設定変更・据え置き・電断時のRT/ART状態、残G、内部フラグの扱いは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

`NOT_APPLICABLE`（2007年5号機、有利区間制度前）。

### resetBenefits

短縮天井、朝一ART/RT確定、設定変更専用高モード、初当たり優遇などの主要恩恵: `NONE_CONFIRMED`。

### resetPenalties

設定変更時のみの主要な不利要素: `NONE_CONFIRMED`。

### resetDetection

ガックン、初期出目、ランプ、ゲーム数挙動などによる本機固有の設定変更/据え置き判別法は `UNVERIFIED_AFTER_RESEARCH`。

P-WORLD掲示板には「朝イチ1回転でREG」等の体験投稿があるが、解析された設定変更判別数値ではないため根拠として採用しない。

### numericResetData

設定変更時モード振り分け、朝一特定G以内当選率、短縮天井G数、リセット恩恵発生率など、比較可能な公開朝一数値: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. コナミアミューズメント公式 — 2007年 SAMBA × SAMBA
   - https://www.konami.com/amusement/psm/archive/ps/2007/samba/
   - 稼働開始2007年12月、5号機 RT/ART、©KPE。
   - reliability: OFFICIAL
2. P-WORLD — サンバ×サンバ
   - https://www.p-world.co.jp/machine/database/4975
   - 型式名サンバアンドサンバJA、KPE、2007年12月導入、合成約1/164〜1/160、BIG/REG規定払い出し。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/a.php
   - 同時成立/RT/ART、ARTとボーナスのループ率最大約80%、BIG約208枚・REG約56枚。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/h-1.php
   - BIG全設定1/304.82、REG設定別1/354.25〜1/336.08、合成1/163.84〜1/159.84。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — メーカー発表合成 / PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/h.php
   - メーカー発表合成1/164〜1/160、PAYOUTは現存ページ上「現在調査中」。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役 / 1000円G
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/07/c.php
   - 1000円あたりゲーム数は現存ページ上「現在調査中」。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — KPE全機種一覧
   - https://5goki.com/kpe
   - 2007/12導入。本機の設定別機械割は不明扱い。
   - reliability: ANALYSIS_SINGLE
8. パチンコFAN — 2007年度機種一覧
   - https://pacnk.com/photoslot/plist2007_0_0.html
   - 2007年12月欄にサンバ×サンバ(KPE)。
   - reliability: ANALYSIS_SINGLE
9. Pマンズ保存記事 — 2007-06-11遊技機検定情報
   - https://p-mans.blogspot.com/2007/06/
   - KPE `サンバアンドサンバJA` の検定情報を保存。
   - reliability: INDUSTRY_ARCHIVE

## missingFields

- 具体的な全国ホール導入日 / 納品開始日
- 設定別機械割 / PAYOUT
- 50枚あたりゲーム数 / 1000円ベース
- ARTの1Gあたり純増枚数
- ART/RTの基本1セットG数または終了条件の高信頼な直接記述
- 設定変更 / 据え置き / 電源OFF→ON時のART・RT・モード・内部状態処理
- 本機固有の設定変更判別法

## conflicts

- ボーナス合成はメーカー発表整数値（1/164〜1/160）と解析精密値（1/163.84〜1/159.84）が存在するが、これは丸め精度差として整合し数値CONFLICTにはしない。
- P-WORLD掲示板の朝一体験談・無限ARTの質問投稿はユーザー投稿であり、解析仕様とのCONFLICT判定には使用しない。
