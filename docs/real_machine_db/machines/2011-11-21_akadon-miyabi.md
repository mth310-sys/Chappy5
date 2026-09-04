# 赤ドン雅

machineName: 赤ドン雅
aliases: 赤ドン 雅 / 赤ドン雅（みやび） / AKADON MIYABI
manufacturer: エレコ
formalModelName: UNVERIFIED_AFTER_RESEARCH
approvalNumber: 1S0702 (HAZUSE machine_code; official approval-number definition UNVERIFIED)
releaseDate: 2011-11-21
releaseDateStatus: EXACT_HALL_INTRODUCTION_CROSSCHECKED

generation: 5号機
systemType: ボーナス+ART / セットストック型ART
coreStatus: COMPLETE_CORE
resetQaStatus: PARTIAL_RESET_BEHAVIOR_WITH_COUNTER_CARRYOVER_PERIOD_ANALYSIS

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「巨人の星V～汗と涙と根性編～」を確認して開始。
- 開始時正本は recordCount 619 / chronologicalFrontier 2011-11-21。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF指定どおり2011-11-21同日群を継続。
- GitHub code searchで「赤ドン雅」未検出を確認し、未登録と判断。
- 導入日はパチビー、HAZUSE DATA、アタリ7、解析ガイドで2011-11-21一致。当時K-Navi発表記事は「11月下旬予定」で整合。

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 98.2% |
| 2 | 99.1% |
| 3 | 101.7% |
| 4 | 104.9% |
| 5 | 109.5% |
| 6 | 115.8% |

- パチビー、K-Navi系整理値、アタリ7、パチマガスロマガ回顧記事、解析ガイドで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

| 設定 | BIG | ART初当り | BIG+ART合算 |
|---|---:|---:|---:|
| 1 | 1/1260.3 | 1/271.9 | 1/253.9 |
| 2 | 1/1260.3 | 1/262.5 | 1/246.1 |
| 3 | 1/1260.3 | 1/256.8 | 1/241.1 |
| 4 | 1/1260.3 | 1/229.3 | 1/217.7 |
| 5 | 1/1260.3 | 1/209.7 | 1/200.4 |
| 6 | 1/1260.3 | 1/202.6 | 1/194.0 |

- BIGは全設定共通。
- パチビー、アタリ7、解析ガイド、パチマガスロマガ回顧記事で同系列を照合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

パチマガスロマガ解析値:

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 31.54G |
| 2 | 31.61G |
| 3 | 31.67G |
| 4 | 31.75G |
| 5 | 31.81G |
| 6 | 31.88G |

- 同サイト実戦値ページには31.83Gの実戦値掲載もあるため、設定別解析値と実戦値を混同しない。
confidence: ANALYSIS_HIGH_SINGLE_SOURCE_FOR_SETTING_VALUES

## netIncrease

- ART「雅RUSH」: **約+1.8枚/G**。
- 1セット **50G**。
- エレコ製品発表を報じた当時グリーンべると/K-Navi、ユニバーサル公式アプリリリース、P-WORLD、パチビー、HAZUSE DATAで一致。
confidence: OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## basicPayout

- BIG: **約416枚**。
- 465枚を超える払い出しで終了。
- 当時業界発表、ユニバーサル公式アプリリリース、P-WORLD、パチビー、HAZUSE DATAで一致。
confidence: OFFICIAL_INDUSTRY_AND_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- 通常時には複数の内部状態が存在し、HAZUSE DATAでは低確・通常・高確などと説明。滞在状態によりART期待度が変化する。
- ART「雅RUSH」はセットストック型、1セット50G、約+1.8枚/G。
- 上位/上乗せ状態「祇園モード」は基本性能が雅RUSHと同じで、ドン揃い確率が雅RUSH中の約200倍。
- 通常天井: **ボーナス・ARTともに引かず約1400G**で天井ART。
- 天井恩恵: **雅RUSH 3セット以上確定 + 50%で祇園モード**との当時解析資料を確認。
- 通常時の変則押しペナルティでは6G間、モードUP/ART抽選が行われず、ハマリG数カウントも停止するとの解析あり。天井比較時の定義注意として保持。

## resetBehavior — v0.7

settingChangeBehavior: **SETTING_CHANGE_DOES_NOT_RESET_CEILING_PROGRESS_PERIOD_ANALYSIS**。2011-11-22公開・2012-01-08更新の当時攻略記事が「設定変更しても天井までのゲーム数は引き継ぐ」と明記し、出典として当時のパチスロ必勝ガイド天井狙い資料を挙げている。別系統の現存解析本文では設定変更項目が「調査中」のものもあり、単独当時資料の明示値として扱う。

carryOverBehavior: **CEILING_PROGRESS_CARRYOVER_STRONGLY_INDICATED / OTHER_STATE_UNVERIFIED_AFTER_RESEARCH**。設定変更でも天井進捗を引き継ぐとの当時資料があるため、据え置きで天井進捗が消去される根拠は確認されない。ただし据え置き時の内部状態・ARTストック等の全保持を本機固有資料で直接確定できず、天井以外はUNVERIFIED_AFTER_RESEARCH。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の天井進捗、内部状態、ART関連状態を本機固有の直接資料で安全に確定できず。設定変更時の記述を電源OFF→ONへ自動転記しない。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE_PERIOD_ANALYSIS**。設定変更でも1400G天井までのゲーム数を引き継ぐとの当時解析記述を採用。confidenceはANALYSIS_SINGLE_PERIOD_SOURCE_WITH_PRINT_REFERENCE。

ceilingAfterReset: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED / NORMAL_1400G_PROGRESS_RETAINED**。設定変更専用の短縮天井数値は確認できず、当時資料上は通常1400G天井の進捗を引き継ぐ。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/通常/高確等の状態があることは確認できるが、設定変更時のモード/状態振り分け値、朝一専用モードを直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に低確/通常/高確のどこから始まるか、据え置きと差があるかを直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CEILING_PROGRESS_RETENTION_CAN_CREATE_MORNING_CARRYOVER_OPPORTUNITY**。設定変更でも天井進捗を引き継ぐ解析が正しければ、前日ハマリを変更で消せないことが朝一客にとって主要恩恵になり得る。ただしこれは新規付与されるリセット恩恵ではなく「天井進捗非クリア」の性質。設定変更専用の高確保証・短縮天井・特定G当選率はNONE_CONFIRMED_AFTER_RESEARCH。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更による前日天井進捗消失は確認されず、その他の固有不利要素も直接確定できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ等による設定変更/据え置き判別を本機固有の信頼できる直接資料で確定できず。天井進捗が設定変更でも保持されるため、天井G数だけで設定変更判別はできない性質が示唆されるが、判別手順として断定しない。

numericResetData:
- 通常天井: 約1400G
- 設定変更時天井進捗: RETAIN（当時解析単独・印刷攻略誌参照あり）
- 天井ART: 雅RUSH 3セット以上 + 50%で祇園モード（当時解析）
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時モード/状態振り分け: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内当選率: UNVERIFIED_AFTER_RESEARCH
- ガックン等変更判別数値: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_SINGLE_PERIOD_SOURCE_FOR_CEILING_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_POWER_CYCLE_MODE_STATE_DETECTION / NOT_APPLICABLE_ADVANTAGEOUS_SECTION

## conflicts

1. **後年5号機クロニクルの赤ドン雅記述混線疑い**
   - 同ページの赤ドン雅欄に「BIG約204枚 / REG約48枚」「ART約+1.4枚/G」等、当時公式・業界・複数解析資料の本機仕様（BIG416枚、REG非搭載、ART約+1.8枚/G）と整合しない記述が存在。
   - 機械割98.2～115.8%のみ他資料と一致。
   - 本レコードでは誤混在の可能性が高い当該基本仕様値を採用せず、CONFLICT_SOURCE_MIXUP_SUSPECTとして保持。
2. **設定変更情報の資料状態差**
   - 当時更新攻略記事: 設定変更でも天井G数引継ぎと明記（2012-01-08更新、印刷攻略誌を参照）。
   - セブンピース現存ページ: 設定変更時「調査中」。
   - 数値競合ではないが、直接確定度の差があるためANALYSIS_SINGLE_PERIOD_SOURCE扱いとする。

## missingFields

- formalModelName / official approvalNumber definition
- 単純電源OFF→ON時の天井/状態/ART関連処理
- 設定変更/据え置き時の低確・通常・高確等の具体状態処理
- 設定変更時のモード/状態振り分け公開数値
- 朝一特定G以内当選率/期待度
- ガックン、初期出目、液晶等の設定変更判別

## sources

取得日: 2026-09-05

1. ユニバーサルエンターテインメント公式アプリ告知（atpress）2011-11-25 — https://www.atpress.ne.jp/news/24080
   - ホール導入直後、BIG416枚、雅RUSH約+1.8枚/G・50G、祇園モードのドン揃い約200倍。
   - confidence: OFFICIAL
2. グリーンべると「BB416枚、ART純増1.8枚/G『赤ドン雅』登場」2011-09-26 — https://web-greenbelt.jp/00002282/
   - エレコ製、BIG416枚、ART約+1.8枚/G・50G、ストック方式、祇園モード。
   - confidence: INDUSTRY
3. K-Navi 発表会記事 2011-09-22 — https://p-kn.com/topics/exhibition/858/
   - エレコ製、BIG416枚、ART約+1.8枚/G・50G、ホール11月下旬予定。
   - confidence: INDUSTRY/ANALYSIS_HIGH
4. K-Navi「赤ドン雅」 — https://p-kn.com/slot/1514/
   - BIG+ART合算、BIG416枚、ART50G・約+1.8枚/G。
   - confidence: ANALYSIS_HIGH
5. パチビー「赤ドン雅」 — https://www.pachibee.jp/machines/index/211090007
   - 導入日2011-11-21、設定別機械割、BIG1/1260.3、ART初当り、BIG416枚、ART50G・約+1.8枚/G。
   - confidence: ANALYSIS_HIGH
6. HAZUSE DATA「赤ドン 雅」 — https://data.hazuse.com/?genre=202&machine_code=1S0702
   - エレコ、導入開始日2011-11-21、BIG平均416枚、低確/通常/高確等、雅RUSH50G・約+1.8枚/G、祇園モード。
   - confidence: ANALYSIS_HIGH
7. アタリ7「赤ドン雅」 — https://www.atari7.com/slot/date1320125354.php
   - 2011-11-21、設定別機械割/BIG/ART初当り/合算、通常時ペナルティでハマリG数カウント停止。
   - confidence: ANALYSIS_HIGH
8. パチマガスロマガ「赤ドン雅 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/87/c-1.php
   - 1000円あたり設定別31.54/31.61/31.67/31.75/31.81/31.88G。
   - confidence: ANALYSIS_HIGH
9. パチマガスロマガ「赤ドン雅 小役確率 実戦値」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/87/c.php
   - 実戦値31.83G。設定別解析値とは定義分離。
   - confidence: ANALYSIS_HIGH_EXPERIMENTAL
10. パチスロ解析ガイド「赤ドン雅」 — https://pachislot-guide.net/2011/akadon-miyabi/
   - 導入2011-11-21、機械割、BIG、ART初当り、天井約1400G、天井恩恵。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE
11. 目指せ月収20万「赤ドン雅 天井解析・攻略」2011-11-22 / 2012-01-08更新 — https://mezase20.com/blog-entry-488.html
   - 通常1400G、雅RUSH3セット+50%祇園、設定変更でも天井G数を引き継ぐ。本文で当時パチスロ必勝ガイド天井狙い見極め教本Vol.4を参照。
   - confidence: ANALYSIS_SINGLE_PERIOD_SOURCE_WITH_PRINT_REFERENCE
12. セブンピース「赤ドン雅 解析」 — https://www.mb.ccnw.ne.jp/seven-peace.com/akadon/akadon.html
   - 基本性能、通常天井約1400G、設定変更項目は調査中。低確/通常/高確等の状態説明。
   - confidence: ANALYSIS_SINGLE_PERIOD_ARCHIVE
13. P-WORLD「赤ドン雅」 — https://www.p-world.co.jp/machine/database/6501
   - エレコ、5号機ART、BIG416枚、雅RUSH50G・約+1.8枚/G、祇園モード。
   - confidence: ANALYSIS_HIGH
14. パチマガスロマガFREE「かつて実在したゴトシリーズ⑧ 赤ドン雅」 — https://pachimaga.com/free/column/004b8961d880fd0b022d12122759f3433a9efd9f.php
   - 回顧照合としてBIG1/1260.3、ART1/271.9～1/202.6、機械割98.2～115.8%、ART50G・約+1.8枚/G。
   - confidence: ANALYSIS_HIGH_RETROSPECTIVE

## nextQueueNote

- 2011-11-21同日群は未閉鎖。
- LATEST_HANDOFFで次候補として指定されている **ミラクルジャグラー（北電子）** を次にrepo重複確認し、未登録なら性能コア+resetBehavior v0.7を処理する。
- ミラクルジャグラー処理後も11/21同日群をK-Navi、HAZUSE、メーカー別一覧、当時業界記事で最終監査してから次の日付へ進む。
