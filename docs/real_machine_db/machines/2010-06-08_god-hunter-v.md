# ゴッドハンターV

machineName: ゴッドハンターV
manufacturer: SANKYO
formalModelName: ゴッドハンターV
approvalNumber: 9S1485
releaseDate: 2010-06-08
releaseDateStatus: CONFLICT_EXACT_DATE
releaseDateNote: パチビー月間導入一覧・機種ページは2010-06-08、K-Naviは2010-06-07、HAZUSEは2010-06-04。SANKYO公式オンライン博物館は2010年導入まで確認できるが具体日は示さない。具体日3系統が競合するためCONFLICTを保持し、本DBの時系列主値はパチビーの月間導入一覧と機種ページが一致する2010-06-08を暫定採用。
generation: 5号機
systemType: ボーナス+ART / CZあり / セットストック式ART
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前490「SLOTとんでも戦士ムテキング」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 490 / chronologicalFrontier 2010-06-07。
- LATEST_HANDOFF最優先候補「ゴッドハンターV」をrepo未登録確認後に追加。
- 導入日は6/4・6/7・6/8でCONFLICT。本線主値は2010-06-08とし、chronologicalFrontierを2010-06-08へ進める。

## payoutRateBySetting

- 設定1: **97.3%**
- 設定2: **99.1%**
- 設定3: **100.7%**
- 設定4: **104.0%**
- 設定5: **107.7%**
- 設定6: **112.0%**

K-Navi、HAZUSE、pacnk、5号機クロニクルで一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合算
- 設定1: **1/97**
- 設定2: **1/96**
- 設定3: **1/94**
- 設定4: **1/91**
- 設定5: **1/87**
- 設定6: **1/70**

SANKYO公式オンライン博物館、K-Navi、HAZUSEで一致。

### V揃い合算 / アヌビスチャンス
- 設定1: **1/115 / 1/655**
- 設定2: **1/114 / 1/630**
- 設定3: **1/112 / 1/606**
- 設定4: **1/109 / 1/560**
- 設定5: **1/106 / 1/520**
- 設定6: **1/86（pacnk設定判別ページでは1/84） / 1/436**

設定6のV揃い合算はpacnk内でもトップページ1/86、設定判別ページ1/84の差があるためCONFLICT保持。
confidence: OFFICIAL_FOR_TOTAL / CONFLICT_FOR_SETTING6_V_COMBINED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「ゴッドハンターV / ゴッドハンター / SANKYO / 9S1485」と「50枚 / 1000円 / ベース / コイン持ち / 通常時ゲーム数」を組み替え、公式、P-WORLD、HAZUSE、K-Navi、pacnk、パチマガスロマガ、5号機回顧DBを横断。パチマガスロマガ専用ページは1000円あたりゲーム数を「現在調査中」としており、比較可能な直接値を確定できなかったため推定しない。
confidence: UNVERIFIED

## netIncrease

- ART「ファラオタイム」: **約+1.5枚/G**
- スーパーファラオタイム: **約+1.5枚/G**

P-WORLD、K-Navi、HAZUSE、パチマガスロマガで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 赤V / 青V BONUS GAME: **約50枚**（77枚超払い出しで終了）
- 白V BONUS GAME: **約40枚**（60枚超払い出しで終了）
- アヌビスチャンス: **約20枚**（30枚超払い出しで終了）

P-WORLD・パチマガスロマガで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は低確 / 高確の2状態。夜（ナイトゾーン）は高確確定。
- ART「ファラオタイム」は**1セット25G**、セットストック式、約+1.5枚/G。
- スーパーファラオタイムは白V成立を規定回数消化するまで継続する準無限系ART。
- 通常状態で**510G消化**すると天井ARTへ突入。P-WORLDは「ボーナス間510G」、旧天井DBは「通常状態510G」と表現差があるため、内部起算点の完全再現は行わず天井値510Gを物差し値として保持。
- ウジャトランプはボーナス消化後に増え、MAX5個時のアヌビスチャンスでART確定。通常ボーナスで1個へ戻る仕様を確認。

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名と「設定変更・リセット・朝一・天井・510G・据え置き・宵越し・高確・ウジャトランプ・ARTストック・ガックン」を組み替え、公式、P-WORLD、HAZUSE、K-Navi、pacnk、パチマガスロマガ、旧天井DBまで横断したが、本機固有の設定変更時処理を直接明記する高信頼資料を確定できなかったため推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。510G天井は確認済みだが、据え置き時に前日ゲーム数・高低状態・ウジャトランプ・ARTストックが引き継がれるかを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のゲーム数、高低状態、ウジャトランプ、ARTストックの扱いを明記する直接資料未確認。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時510G天井の存在は複数資料で確認したが、設定変更時に内部ゲーム数が0へ戻るか引き継ぐかは直接根拠未確定。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井・510Gからの変更数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常低確/高確は確認済みだが、設定変更時の状態振り分け・朝一専用モードは直接根拠未確定。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。高確、ウジャトランプ、ARTセットストック、CZ関連状態の設定変更時処理は直接根拠未確定。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの天井短縮、高確スタート、ART/CZ優遇、朝一当選率等の直接根拠は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン / 初期出目 / リール / 液晶 / 朝一ステージ / 設定変更判別」まで再探索したが、本機固有の高信頼な変更判別要素を確定できず。

numericResetData:
- normalCeiling: **510G**
- resetCounterHandling: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: NORMAL_CEILING_510G_CONFIRMED_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED

## conflicts

1. releaseDate: HAZUSE=2010-06-04、K-Navi=2010-06-07、パチビー=2010-06-08。平均化せず全て保持。SANKYO公式は2010年導入のみ。
2. 設定6 V揃い合算: pacnkトップ=1/86、同設定判別ページ=1/84。K-Naviはボーナス総合1/70のみのため、この詳細値はCONFLICT保持。
3. 天井表現: P-WORLD「ボーナス間510G」、旧天井DB「通常状態510G」。比較用天井値510Gは一致するが内部起算点の表現差を保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehaviorDetailed: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterResetAtSettingChange: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. SANKYO公式オンライン博物館「ゴッドハンターV」 — https://www.sankyo-fever.jp/collection/539/ — 2010年導入、型式名、設定別合成確率、ゲーム性 — reliability: OFFICIAL
2. K-Navi「ゴッドハンターV」 — https://p-kn.com/slot/1189/ — 2010-06-07、機械割97.3〜112.0%、合算1/97〜1/70、ART25G・約+1.5枚/G — reliability: ANALYSIS_HIGH
3. パチビー「ゴッドハンターV」/2010年6月導入一覧 — https://www.pachibee.jp/machines/schedule/2010-06 — 2010-06-08導入 — reliability: INDUSTRY_MACHINE_DB
4. P-WORLD「ゴッドハンターV」 — https://www.p-world.co.jp/machine/database/5917 — ボーナス獲得約50/40/20枚、ART25G・約+1.5枚/G、510G天井、高低状態/ウジャトランプ — reliability: INDUSTRY_MACHINE_DB
5. HAZUSE「ゴッドハンターV」 — https://hazuse.com/machine/pachislot/9S1485/ — 型式・検定番号9S1485、2010-06-04、機械割、通常状態、ART仕様 — reliability: ANALYSIS_HIGH
6. pacnk「ゴッドハンターV」 — https://pacnk.com/slot/2010/godhunter/top.php — 2010年6月、V揃い/アヌビスチャンス設定別確率、機械割 — reliability: ANALYSIS_HIGH
7. pacnk設定判別 — https://pacnk.com/slot/tools/sh_godhunter.html — 設定別V揃い/アヌビスチャンス、設定6 V合算1/84表記、ヤメ時/ウジャトランプ — reliability: ANALYSIS_HIGH
8. パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/21/a.php — ART約+1.5枚/G、25Gセット、ボーナス純増約50/40/20枚 — reliability: ANALYSIS_HIGH
9. パチマガスロマガ 小役・1000円あたり — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/21/c.php — 1000円あたりゲーム数「現在調査中」 — reliability: ANALYSIS_HIGH
10. パチスロ立ち回り講座 5号機天井DB — https://crankyseven.com/sp/tenjo-5ka.htm — ゴッドハンターV通常状態510GでART、設定変更欄は情報なし — reliability: RETROSPECTIVE_DATABASE
11. 5号機クロニクル SANKYO系一覧 — https://5goki.com/sankyo — 機械割97.3〜112.0%の後年照合 — reliability: RETROSPECTIVE_DATABASE
