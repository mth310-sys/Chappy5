# マーベルヒーローズ

machineName: マーベルヒーローズ
aliases: MARVEL HEROES / パチスロ マーベルヒーローズ
manufacturer: タイヨーエレック
formalModel: マーベルヒーローズH
inspectionNumber: 7S0161
releaseDate: 2007-07-08
generation: 5号機初期
systemType: ボーナス + RT/CZ + ART（スーパーマーベルチャンス）
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- グリーンべると当時業界記事（2007-06-08）は「納品は7月8日より」と明記。
- K-Navi発表会記事（2007-06-04）はホールデビューを「7月9日以降予定」とする。
- HAZUSE現行アーカイブは導入開始日を2007-07-06とする。
- 日付は平均化せずCONFLICT保持。本DBの時系列本線は当時業界記事の具体的な納品開始 `2007-07-08` を採用する。

信頼度: INDUSTRY_HIGH / date CONFLICT

## payoutRateBySetting

パチ＆スロ必勝本（独自調査値）:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.22% |
| 2 | 100.05% |
| 3 | 104.31% |
| 4 | 107.48% |
| 5 | 112.63% |
| 6 | 119.52% |

- K-Naviは設定1 `96.4%`、設定6 `119.5%`（中間設定は調査中）。
- 後年整理資料には `97.45 / 100.62 / 104.58 / 107.65 / 112.61 / 119.68%` も存在。
- 差異は平均化せずCONFLICTとして保持する。本文表は全設定が揃う当時解析系の必勝本値を採用。

信頼度: ANALYSIS_HIGH / CONFLICT

## initialHitBySetting

パチ＆スロ必勝本解析値。K-Naviでも同値（丸め差）を確認。

| 設定 | ノーマルBIG（赤7） | スーパーBIG（青7） | BIG合算 |
|---|---:|---:|---:|
| 1 | 1/492.75 | 1/2048.00 | 1/397.19 |
| 2 | 1/458.29 | 1/2048.00 | 1/374.49 |
| 3 | 1/428.34 | 1/2048.00 | 1/354.25 |
| 4 | 1/402.06 | 1/2048.00 | 1/336.08 |
| 5 | 1/378.82 | 1/2048.00 | 1/319.69 |
| 6 | 1/358.12 | 1/2048.00 | 1/304.82 |

REGは非搭載。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

- `マーベルヒーローズ / MARVEL HEROES / マーベルヒーローズH / タイヨーエレック` と `50枚 / 1000円 / ベース / コイン持ち / 千円` を組み替え、当時解析・旧DB・P-WORLD・K-Navi・HAZUSE・回顧資料を横断したが、比較可能な通常時50枚ベース数値を高信頼で確定できず。
- UNVERIFIED。

## netIncrease

- ART「スーパーマーベルチャンス」: 1Gあたり約+1.2枚。
- 基本1セット50G+α。
- ART中の特殊リプレイ（X-gate）でゲーム数上乗せがあり、P-WORLDでは1回10/30/50/100/300/500/1000Gの公開値。

信頼度: ANALYSIS_HIGH

## basicPayout

パチ＆スロ必勝本 / P-WORLD:
- ノーマルBIG（赤7）: 平均約213.9枚（P-WORLD約214枚）
- スーパーBIG（青7）: 平均約380.2枚（P-WORLD約380枚）

払い出し終了条件:
- ノーマルBIG: 256枚超払い出しで終了
- スーパーBIG: 466枚超払い出しで終了

中古実機資料では最大約216枚/384枚表記もあるため、実獲得平均と最大/終了条件を混同しない。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### マーベルチャンス

- ゲーム数不定のRT/CZ。
- 3択15枚役を規定回数（1〜4回）揃える、またはX-gate出現などでART「スーパーマーベルチャンス」へ移行。

### スーパーマーベルチャンス

- 50G+αのART。
- 純増約+1.2枚/G。
- 3択15枚役をナビ。
- 特殊リプレイ成立でARTゲーム数を上乗せ。
- ART終了後は再びマーベルチャンスへ移行し、引き戻しの余地がある。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- パチ＆スロ必勝本「朝イチ情報」で、**設定変更後は内部的に高確スタート**と明記。
- 高確移行は15枚役取りこぼしを契機とする30G周期に関係し、特殊リプレイ成立状況の観察から設定変更を見抜ける場合があるとされる。
- これは朝一客行動へ影響するためv0.7の主要恩恵/判別要素として採用。

carryOverBehavior:
- 据え置き時の内部高確/低確、マーベルチャンス、ART残G、潜伏状態の具体的引継ぎを示す高信頼公開資料は今回確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで内部高確/RT/CZ/ART状態がどう処理されるかを示す本機固有の高信頼資料は今回確定できずUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井の存在を示す高信頼資料は今回確認できず、通常時天井ゲーム数はNONE_CONFIRMED。
- ARTはゲーム数管理だが、設定変更/据え置き/電断時の残G処理はUNVERIFIED。

ceilingAfterReset:
- 設定変更時の短縮天井・朝一専用天井はNONE_CONFIRMED。

modeAfterReset:
- 設定変更後は内部高確スタート。
- 朝一専用の別モード振り分けやモード選択率の公開数値は今回確認できず。

stateAfterReset:
- 設定変更時: 高確スタートを確認。
- ART/CZ/潜伏中に設定変更した場合の残状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- **設定変更後の内部高確スタート**。
- 高確状態はARTへの導線に関係するため、朝一の実用的恩恵として記録。

resetPenalties:
- 設定変更でART残G等を失うかはUNVERIFIEDのため、公開不利として断定しない。

resetDetection:
- 必勝本は、15枚役取りこぼしを契機とする30G周期の高確移行と特殊リプレイ成立状況を精査することで、設定変更を見抜ける場合があるとしている。
- 本機固有のリールガックン/リール初動による変更判別は再探索後も高信頼資料を確定できずUNVERIFIED。

numericResetData:
- 設定変更後: 内部高確スタート（確率ではなく状態確定情報）
- 高確移行関連: 15枚役取りこぼし契機で30G周期という公開説明あり
- 朝一○G以内当選率、設定変更時ART当選率、短縮天井数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — タイヨーEの新機種、「5号機に足りない要素を追及」（2007-06-08）
   - https://web-greenbelt.jp/00004208/
   - 新方式ART、X-gate、納品7月8日より
   - reliability: INDUSTRY_HIGH
2. K-Navi — 『マーベルヒーローズ』プレス発表会（2007-06-04）
   - https://p-kn.com/topics/exhibition/153/
   - 新方式ART、上乗せ/潜伏/引き戻し、ホールデビュー7月9日以降予定
   - reliability: INDUSTRY
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/875/1/14207
   - 設定別BIG確率、全設定機械割、平均獲得枚数
   - reliability: ANALYSIS_HIGH
4. パチ＆スロ必勝本 — 朝イチ情報
   - https://p.hisshobon.jp/machine/875/1/21855
   - 設定変更後は内部高確スタート、30G周期の高確移行観察による変更判別
   - reliability: ANALYSIS_HIGH
5. P-WORLD — パチスロ マーベルヒーローズ
   - https://www.p-world.co.jp/machine/database/4782
   - S-BIG約380枚/N-BIG約214枚、ART50G+α、純増約1.2枚/G、上乗せゲーム数
   - reliability: ANALYSIS_HIGH
6. K-Navi — マーベルヒーローズ
   - https://p-kn.com/slot/618/
   - 青7/赤7/合算、設定1・6機械割、払い出し終了条件
   - reliability: ANALYSIS_HIGH
7. HAZUSE — マーベルヒーローズ
   - https://hazuse.com/machine/pachislot/7S0161/
   - 型式名マーベルヒーローズH、検定番号7S0161、導入開始日2007-07-06、RT/ART概要
   - reliability: OLD_DB_HIGH
8. A-SLOT — タイヨーエレック パチスロ マーベルヒーローズ
   - https://www.a-slot.com/SHOP/taiyo_elec1.html
   - 型式名、最大獲得目安、ボーナス構成・RT/ART概要の補助照合
   - reliability: RETROSPECTIVE_SUPPORT
9. pachinko’s blog — タイヨーエレック「パチスロ マーベルヒーローズ」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/07/marvel-heroes
   - 後年整理の機械割 97.45〜119.68% をCONFLICT資料として保持
   - reliability: RETROSPECTIVE_CONFLICT

## missingFields

- 通常時50枚あたりゲーム数/ベース
- 据え置き時の内部状態/ART/CZ残状態の具体的引継ぎ
- 電源OFF→ONのみの内部状態/ART/CZ残状態処理
- ART/CZ/潜伏中の設定変更時残状態処理
- 本機固有のガックン/リール初動判別
- 朝一当選率等の公開確率数値

## conflicts

1. 導入日: HAZUSE `2007-07-06` / グリーンべると `2007-07-08納品開始` / K-Navi `2007-07-09以降ホールデビュー予定`。平均化せず、本線は当時業界記事の7/8納品開始を採用。
2. 機械割: 必勝本 `97.22/100.05/104.31/107.48/112.63/119.52%`、K-Navi設定1 `96.4%`・設定6 `119.5%`、後年整理 `97.45/100.62/104.58/107.65/112.61/119.68%`。平均化せずCONFLICT保持。
3. BIG獲得表記: 必勝本/P-WORLDの平均約213.9/380.2枚と、中古実機資料の最大約216/384枚は定義差のため同一値として混ぜない。

## status

COMPLETE_CORE
