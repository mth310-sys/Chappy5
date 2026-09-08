machineName: パチスロ北斗の拳 修羅の国篇
manufacturer: サミー / Sammy
releaseDate: 2016-10-03
recordNumber: 1014
generation: 5号機 / 5.5号機期
systemType: A+ART / リアルボーナス+セット継続ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL

## identity
- サミー公式が2016-07-13に発売を発表し、マイスロ公式が2016-10-03を本機のホール導入日と明記。
- K-Navi、パチ7、複数解析も2016-10-03で一致するため releaseDate は同日で固定。
- 正式型式名・検定番号は、機種名/サミー/型式/検定/6S系、HAZUSE・中古実機DB・公的告示系を検索語変更して再探索したが、本機（2016年ART版）を直接固定できる高信頼資料を今回取得できなかった。2018年「羅刹ver.」型式 `パチスロ北斗の拳AA／ZS` / 7S0983 を誤転記しない。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE_WITH_IDENTITY_PARTIAL

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 101.2% |
| 4 | 105.4% |
| 5 | 110.1% |
| 6 | 115.1% |
- 複数解析で同系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり | ボーナス |
|---:|---:|---:|
| 1 | 1/436.1 | 約1/963.8 |
| 2 | 1/418.5 | 約1/963.8 |
| 3 | 1/383.2 | 約1/963.8 |
| 4 | 1/324.7 | 約1/963.8 |
| 5 | 1/290.2 | 約1/963.8 |
| 6 | 1/237.1 | 約1/963.8 |
- ボーナスは設定共通約1/964として複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約37G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「闘神演舞」純増: 約2.0枚/G。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- リアルボーナス「天舞の刻 / 闘神演舞TURBO」: 約150枚。
- ART「闘神演舞」: 1セット50G、約2.0枚/G。
- スペシャルバトル「特闘」: 1セット15G、継続率84% or 89%（上位要素のため基本物差し値には混ぜない）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時内部モード: 低確 / 通常 / 高確 / 前兆。
- ART間1300G到達で天井状態へ移行し、その後前兆を経てART。ボーナス「天舞の刻」ではART間天井ゲーム数をリセットしない。
- ART初当たりを物差しの主要初当たりとして扱う。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ART間天井ゲーム数: RESET。
- 内部モード: RESELECT。
- 液晶ゲーム数: 実戦上0Gへ。
- 内蔵データ: 実戦上クリアとする当時解析あり。
- RT状態: 当時必勝本では「現在調査中」のままで、後年直接契約を固定できず UNVERIFIED_AFTER_RESEARCH。

### carryOverBehavior
- 据え置き時は、設定変更を行わないためART間天井ゲーム数・内部モードをCARRYOVERとする当時設定変更/電断比較に整合。
- 据え置き専用の再抽選・短縮天井は NONE_CONFIRMED_AFTER_RESEARCH。

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数 CARRYOVER。
- 内部モード: CARRYOVER。
- 液晶ステージ: 当時一撃資料では「現在調査中」。今回、別系統資料まで再探索したが固定できず UNVERIFIED_AFTER_RESEARCH。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRYOVER。
- 通常天井はART間1300G+前兆。天舞の刻ボーナスではART間ゲーム数をリセットしない。

### ceilingAfterReset
- 設定変更後も公開上の最大天井はART間1300G+前兆。
- リセット専用の固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

### modeAfterReset
- 設定変更時は低確 / 通常 / 高確へ再抽選。
- 据え置き / 純電源OFF→ONは内部モードCARRYOVER。

### stateAfterReset
- 本機の朝一状態は通常時モード（低確/通常/高確）と同じ公開テーブルで管理されるため、別の独立状態テーブルは設けない。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 高確スタート率が設定1で12.50%、設定6で37.50%まで上昇する設定差があり、朝一の状態挙動は変更推測材料になり得る。
- 固定天井短縮・リセット専用初当たり保証は NONE_CONFIRMED_AFTER_RESEARCH。

### resetPenalties
- 前日ART間天井進捗は設定変更で消失。
- 前日内部モードも設定変更で再抽選される。

### resetDetection
- 設定変更時は液晶ゲーム数が実戦上0G、内蔵データが実戦上クリアとの当時資料あり。ただし店舗側の対策運用を考慮し、メーカー保証の確定判別とはしない。
- 設定変更後の液晶開始ステージはハン/ヒョウ/カイゼルのいずれかとの実戦資料があるが、電源OFF→ON側の液晶ステージ契約が固定できないため、ステージ単独の確定判別にはしない。
- 本機固有のメーカー保証されたガックン判別は、機種名+ガックン/設定変更/朝一で再探索後も確認できず NONE_CONFIRMED_AFTER_RESEARCH。

### numericResetData
| 設定 | 低確 | 通常 | 高確 | 通常以上 | 高確 |
|---:|---:|---:|---:|---:|---:|
| 1 | 56.25% | 31.25% | 12.50% | 43.75% | 12.50% |
| 2 | 53.75% | 31.25% | 15.00% | 46.25% | 15.00% |
| 3 | 42.50% | 37.50% | 20.00% | 57.50% | 20.00% |
| 4 | 37.50% | 37.50% | 25.00% | 62.50% | 25.00% |
| 5 | 25.00% | 43.75% | 31.25% | 75.00% | 31.25% |
| 6 | 18.75% | 43.75% | 37.50% | 81.25% | 37.50% |

- 通常/設定変更後天井: ART間1300G+前兆。
- 設定変更後一定G以内の自然初当たり率: NONE_CONFIRMED_AFTER_RESEARCH。

## dataQualityNotes
- 導入日はサミー公式マイスロの2016-10-03ホール導入明記を一次根拠とし、K-Navi/パチ7で照合。
- 機械割・ART初当たり・約37G/50枚・純増約2.0枚/G・150枚ボーナスは複数解析で整合。
- resetBehaviorは一撃の当時「天井/設定変更」と必勝本の別系統資料で、設定変更時天井RESET/モード再抽選、電源OFF→ON時天井/モード引継ぎ、設定別朝一モード振り分けを照合。
- RT状態と電断時液晶ステージは当時資料自体が調査中で、検索語・資料系統を変更して再探索しても直接固定できなかったためUNVERIFIED。
- 2018年羅刹ver.の型式/検定情報は別機種であり、本機へ混同しない。

## conflicts
- NONE_CONFIRMED_FOR_CORE_VALUES_IN_CURRENT_RESEARCH。

## missingFields
- 2016年ART版の正式型式名: UNVERIFIED_AFTER_RESEARCH
- 2016年ART版の検定番号: UNVERIFIED_AFTER_RESEARCH
- 設定変更時RT状態: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時液晶ステージ: UNVERIFIED_AFTER_RESEARCH
- メーカー保証のガックン等変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. Sammy公式 — 新機種「パチスロ北斗の拳 修羅の国篇」発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2016/558.html
2. Sammy公式 マイスロ — 2016-10-03ホール導入日
   - https://www.sammy.co.jp/japanese/myslot/news/index_10.html
3. K-Navi — パチスロ北斗の拳 修羅の国篇
   - https://p-kn.com/slot/2576/
4. P-WORLD — パチスロ北斗の拳 修羅の国篇
   - https://www.p-world.co.jp/machine/database/8119
5. パチ7 — 基本/天井
   - https://pachiseven.jp/machines/4910/cutout/78
6. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_hokuto_syura/3/
7. 一撃 — 通常時のモード移行
   - https://1geki.jp/slot/s_hokuto_syura/42/
8. パチ＆スロ必勝本 — 天井&設定変更
   - https://p.hisshobon.jp/machine/2790/1/60256
9. パチマガスロマガ — ゲーム性まるわかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/153/l.php
10. 期待値見える化 — スペック/ゲーム性照合
   - https://slotjin.com/zone/hokutonoken-shura/
