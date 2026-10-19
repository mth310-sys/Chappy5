# メガミリオネア ヴィーナスヴァージョン

machineName: メガミリオネア ヴィーナスヴァージョン
manufacturer: ラスター（発売案内: ウィンネットテクノロジー）
releaseDate: 2013-02-04
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi全国一斉導入開始日2013-02-04を時系列キー採用。グリーンべると2012-12-26記事は2013年2月上旬納品開始予定、P-WORLDは2013年02月表記で整合。
generation: 5号機
systemType: ART / ボーナス非搭載 / セットストック+継続抽選+ゲーム数上乗せ
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 型式名: **メガミリオネアM**。
- 検定番号: **2S1158**（P-WORLD）。
- メーカー: ラスター。業界記事ではウィンネットテクノロジーがラスター製「メガミリオネア ヴィーナスバージョン」を発売。
- confidence: INDUSTRY_PLUS_DATABASE_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.5% |
| 2 | 98.9% |
| 3 | 103.1% |
| 4 | 105.9% |
| 5 | 109.5% |
| 6 | 109.6% |

- K-Navi、P-WORLD、2013年当時攻略資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「メガゲーム」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/265 |
| 2 | 1/184 |
| 3 | 1/242 |
| 4 | 1/156 |
| 5 | 1/250 |
| 6 | 1/146 |

- K-Navi、P-WORLD、2013年当時攻略資料で一致。
- 偶数/奇数で非単調な設計のため、値を補間・平滑化しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約20.5G / 1000円（50枚相当）**。
- 2013-02-13「天井ハイエナ生活」と2013-02-14「目指せ月収20万！」の当時攻略記事で一致。
- 極端に低いベースだが前作値との混同を避け、ヴィーナスヴァージョンを明記する2系統一致のみ採用。
- confidence: ANALYSIS_HIGH_PERIOD_MULTI_SOURCE

## netIncrease

- ART「メガゲーム」: **約+2.4枚/G**。
- 1セット **50G+α**（パチマガスロマガは基本50G、P-WORLDは50G+α表記）。
- K-Navi、P-WORLD、パチマガスロマガ、業界記事系列で整合。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE

## basicPayout

- ボーナス非搭載。
- ART「メガゲーム」基本: **50G × 約2.4枚/G ≒ 約120枚**。パチマガスロマガも規定50G・純増約120枚と掲載。
- ART継続率は最大80%。
- 通常時MEGA揃い: ART5セット以上確定、さらに1/4でPREMIUM CHALLENGE。
- PREMIUM CHALLENGE中はMEGA揃いが約2/3で成立し、揃うたび5セット上乗せ。
- ART中の細かな成立役別抽選は本DB対象外。

## modeSpecificMinimumData

### 天井

- **メガゲーム終了後800G**で前兆を経由してART当選。
- 2013-02-13 / 2013-02-14の当時攻略2系統で一致。
- 前作「メガミリオネア」の1200G天井を混入しない。
- 天井到達時の前作固有ループ恩恵はヴィーナス版へ転記しない。ヴィーナス版の追加天井恩恵は今回確定できず。
- confidence: ANALYSIS_HIGH_PERIOD_MULTI_SOURCE

### 通常内部状態

- P-WORLDは通常時にART期待度の異なる内部状態が存在し、液晶背景の青＜緑＜紫で示唆すると記載。
- 状態名・全移行テーブルは本DBの必須粒度外。設定変更時の状態/モード契約はresetBehaviorへ分離。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_CONFIRMED__LCD_123_ON_POWER_CYCLE_CONFIRMED__SUEOKI_MODE_STATE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更で天井までのゲーム数をリセット**。
- 2013-02-13、2013-02-14の当時攻略2系統が「宵越し不可 / 設定変更で天井Gリセット」で一致。
- 設定変更後の液晶出目は **123スタート**と2013-02-13当時資料が明記。
- 設定変更時のモード/内部状態の再抽選・引継ぎは、ヴィーナス版固有の直接資料を十分な再探索後も確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 前作は設定変更後もモード引継ぎとする資料があるが、ヴィーナス版へは転記しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_CLEAR__ANALYSIS_SINGLE_PERIOD_FOR_LCD

### carryOverBehavior

- 「宵越し不可」は設定変更時の天井リセットとして直接確認。
- **純据え置き時**の800G天井進捗、内部状態/モード、ARTストック等の完全保持契約は、「据え置き / 宵越し / 前日 / 持ち越し / リセット」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、当時攻略、後年資料を横断したが直接明記を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時CLEARの反対推定だけで据え置き保持を確定しない。

### powerCycleBehavior

- **単純電源OFF→ONでも液晶出目は123スタート**と2013-02-13当時攻略資料が明記。
- したがって朝一123出目だけでは設定変更/据え置き判別に使用できない。
- 電源OFF→ONのみの場合の800G内部天井カウンタ、内部状態/モード、ARTストック等の保持/再抽選契約は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更時は前日天井進捗を消去し、通常天井 **800G**を新規カウント。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 設定変更後のモード再抽選/引継ぎ、朝一専用モード、公開振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
- 前作「メガミリオネア」の設定変更後モード引継ぎ情報は別機種資料として隔離。

### stateAfterReset

- 設定変更後の内部状態再抽選/引継ぎ、公開振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、朝一専用当選率、専用高確率等の公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更で前日の800G天井進捗が消失。

### resetDetection

- 設定変更後の液晶出目は123スタートだが、**電源OFF→ONのみでも123スタート**するため変更判別には使えない。
- 本機固有のガックン、初期出目差、朝一ステージ差等の直接的変更判別仕様は再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeGameCounter: **CLEAR_CONFIRMED**。
- normalCeilingAfterReset: **800G**。
- resetSpecificShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- settingChangeLcdInitialDisplay: **123**。
- powerCycleLcdInitialDisplay: **123**。
- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- normalCeilingAfterReset: 800G
- resetSpecificCeilingReduction: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeLcdInitialDisplay: 123
- powerCycleLcdInitialDisplay: 123
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: MULTI_SOURCE_PERIOD_FOR_SETTING_CHANGE_COUNTER_AND_800G_CEILING__SINGLE_PERIOD_DIRECT_FOR_LCD_POWER_CYCLE__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_INTERNAL_COUNTER_MODE_STATE_AND_GAKKUN

## missingFields

- 純据え置き時の800G内部天井カウンタ、モード/内部状態の完全保持契約。
- 単純電源OFF→ON時の内部天井カウンタ・モード/内部状態の保持/再抽選契約（液晶123のみ確認）。
- 設定変更時のモード/状態振り分け数値。
- 本機固有ガックン等の設定変更判別仕様。
- ヴィーナス版固有の天井到達時追加恩恵の有無。

## conflicts

- 重大な性能コア数値競合は今回確認なし。
- 型式/シリーズ混同注意: 前作「メガミリオネア」（1セット100G、天井1200G）とは別機種。本レコードへ前作の天井恩恵・モード契約を転記しない。

## sources

取得日: **2026-09-06**

1. K-Navi — メガミリオネア ヴィーナスヴァージョン
   - https://p-kn.com/slot/1802/
   - 2013-02-04導入、設定別ART初当たり、機械割、ART50G・純増2.4枚/G。
   - reliability: ANALYSIS_HIGH_DATABASE
2. K-Navi — 2013年2月新台導入カレンダー
   - https://p-kn.com/calendar/201302/
   - 2013-02-04同日群4機種を確認。
   - reliability: DATABASE_HIGH
3. P-WORLD — メガミリオネア ヴィーナスヴァージョン
   - https://www.p-world.co.jp/machine/database/6976
   - 型式メガミリオネアM、検定番号2S1158、設定別ART/機械割、ART仕様、通常内部状態。
   - reliability: DATABASE_HIGH
4. P-WORLD / グリーンべると — 「メガミリオネアに『ヴィーナスバージョン』登場」2012-12-26
   - https://news.p-world.co.jp/articles/5639/greenbelt
   - ラスター製、ウィンネットテクノロジー発売、2013年2月上旬納品予定。
   - reliability: INDUSTRY
5. パチマガスロマガ — メガミリオネア ヴィーナスヴァージョン
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/22/luster_slot_22.php
   - ART1セット50G、純増2.4枚/G、約120枚、最大80%ループ、天井/朝一ページの存在確認。
   - reliability: ANALYSIS_HIGH
6. 天井ハイエナ生活 — 「メガミリオネア ヴィーナスバージョン 天井スペック解析情報」2013-02-13
   - https://macerate.seesaa.net/article/322077320.html
   - 20.5G/1000円、800G天井、設定変更で天井Gリセット、宵越し不可、設定変更/電源ONOFFとも液晶123スタート。
   - reliability: ANALYSIS_SINGLE_PERIOD_DIRECT
7. 目指せ月収20万！ — 「メガミリオネア ヴィーナス 天井解析・攻略」2013-02-14
   - https://mezase20.com/blog-entry-781.html
   - 800G天井、宵越し不可、設定変更で天井Gリセット、20.5G/1000円を独立照合。
   - reliability: ANALYSIS_SINGLE_PERIOD
8. pachinko’s blog — メガミリオネア ヴィーナスバージョン
   - https://pachinko.hatenablog.jp/entry/2013/03/megaMillionaire-venus
   - 型式メガミリオネアM、2013年2月リリース、純増約2.4枚/Gを後年整理で補助確認。
   - reliability: RETROSPECTIVE_SECONDARY

## researchNotes

- 欠損探索では「メガミリオネア ヴィーナスヴァージョン / ヴィーナスバージョン / ヴィーナスver / メガミリオネアM / ラスター」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード / 状態 / ガックン / 50枚 / 1000円 / ベース / コイン持ち」を組み替えた。
- K-Navi、P-WORLD、グリーンべると、パチマガスロマガ、2013年当時攻略ブログ、後年DB/回顧を横断。
- 前作「メガミリオネア」の1200G天井・1セット100G・設定変更後モード引継ぎ等は明確に別機種として除外した。
