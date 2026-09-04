# チェリーパラダイス

machineName: チェリーパラダイス
manufacturer: ソフィア
releaseDate: 2012-02-20
releaseDatePrecision: EXACT_LEGACY_DATABASE_DATE
releaseDateNotes: HAZUSEが型式「チェリーパラダイスA3」について2012-02-20導入開始と掲載。ソフィア公式現存製品一覧、P-WORLD、後年の5号機クロニクル/パチビー回顧でも2012年2月機であることを照合。
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / 小役前兆型告知
formalModelName: チェリーパラダイスA3
approvalNumber: 1S0966
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_QA

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.9% |
| 2 | 97.8% |
| 3 | 98.7% |
| 4 | 100.2% |
| 5 | 103.2% |
| 6 | 105.6% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

notes:
- HAZUSE、パチマガスロマガ、5号機クロニクルで同一系列を確認。
- pacnkは設定1=96.30%、設定2=967.80%、設定3=98.60%、設定4=100.10%、設定5=103.20%、設定6=105.50%と掲載するが、設定2は明白な桁異常で、設定1/3/4/6も上記3資料と不一致。主値には採用せずCONFLICT_NOTEとして保持。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/290.0 | 1/546.1 | 1/189.4 |
| 2 | 1/284.9 | 1/528.5 | 1/185.1 |
| 3 | 1/280.1 | 1/512.0 | 1/181.0 |
| 4 | 1/271.9 | 1/489.1 | 1/174.8 |
| 5 | 1/263.2 | 1/461.5 | 1/167.5〜1/167.6 |
| 6 | 1/255.0 | 1/442.8 | 1/161.8 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

notes:
- HAZUSEとパチマガスロマガで設定別BIG/REG系列は一致（設定2 BIGはHAZUSE 1/284.9、パチマガスロマガ検索取得値1/284.0で差があるため主値はHAZUSE/P-WORLD系の1/284.9）。
- 合算設定5はHAZUSE 1/167.5、パチマガスロマガ 1/167.6の丸め差として保持。

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

notes:
- 「チェリーパラダイス / チェリーパラダイスA3 / ソフィア」を「50枚あたり / 1000円あたり / ベース / コイン持ち / 千円ゲーム数」と組み替え、公式、HAZUSE、P-WORLD、パチマガスロマガ、5号機クロニクル、pacnk、回顧資料を再探索。
- 通常小役確率は取得できるが、そこから理論ベースを逆算せず、比較可能な直接公表値が見つからないためUNVERIFIED_AFTER_RESEARCH。

## netIncrease

NOT_APPLICABLE_NORMAL_TYPE

## basicPayout

- BIG: 336枚
- REG: 112枚

reliability: DATABASE_HIGH_MULTI_SOURCE

notes:
- P-WORLDがBIG 336枚 / REG 112枚を直接掲載。
- HAZUSE配当表はBIG 345枚超払い出し終了、REG 105枚超払い出し終了という規定払い出し条件を掲載しており、純増枚数とは定義を分けて保持。

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- ART/AT/CZは非搭載。
- 小役前兆型告知を搭載。ボーナス成立後はベルの一部がチェリーとして出現し、チェリー連で期待感を演出する。
- 通常ゲーム数天井は非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: NO_CEILING_OR_PERSISTENT_AT_MODE_APPLICABLE__TRANSIENT_STATE_UNVERIFIED
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING
modeAfterReset: NOT_APPLICABLE_NO_PERSISTENT_AT_ART_CZ_GAME_MODE_CONFIRMED
stateAfterReset: TRANSIENT_ALERT_LAMP_OR_BONUS_INTERNAL_STATE_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: ガックン、初期出目、WIN/CHANCEランプ、設定変更直後の表示・挙動による本機固有の変更判別はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常ゲーム数天井: 非搭載。
- 設定変更専用短縮天井: NOT_APPLICABLE。
- 朝一特定ゲーム数以内当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH。
- リセット恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- 「チェリーパラダイス / チェリーパラダイスA3 / ソフィア / 1S0966」を「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / ガックン / 初期出目 / ランプ」と組み替えて再探索。
- HAZUSE/P-WORLD/pacnkで本機がボーナス主体のノーマルタイプ、pacnkで天井非搭載を確認したため、天井ゲーム数・規定G数モード・ART/AT/CZに関するresetBehaviorは非該当。
- 設定変更/据え置き/単純電源OFF→ON時の成立ボーナス、一時告知状態、リール初期挙動などは本機固有の直接根拠を十分確定できずUNVERIFIED_AFTER_RESEARCH。一般的な5号機ノーマルタイプの挙動から補完しない。
- 有利区間は5号機のため非該当。

resetQaReliability: HIGH_FOR_NO_CEILING_AND_NON_AT_STRUCTURE__UNVERIFIED_FOR_TRANSIENT_STATE_CARRYOVER_POWER_CYCLE_GAKKUN

## sources

取得日: 2026-09-05

1. ソフィア公式 パチスロ製品一覧 — https://www.sophia-net.co.jp/products/products_slot.html
   - 現存公式ラインナップで「チェリーパラダイス」と小役前兆型告知機であることを確認。
   - reliability: OFFICIAL
2. HAZUSE — https://hazuse.com/machine/pachislot/1S0966/
   - 導入開始日2012-02-20、メーカー、型式名チェリーパラダイスA3、検定番号1S0966、設定別BIG/REG/合算、機械割、配当条件を確認。
   - reliability: LEGACY_DATABASE_HIGH
3. P-WORLD — https://www.p-world.co.jp/machine/database/6596
   - ソフィア、5号機ノーマル/完全告知、BIG336枚、REG112枚、小役前兆型ゲーム性を確認。
   - reliability: DATABASE_HIGH
4. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sophia_slot/01/h.php
   - 設定別BIG/REG/合算、PAYOUT 96.9〜105.6%系列を確認。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ 通常時の打ち方 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sophia_slot/01/d.php
   - ボーナス成立後はベルの一部がチェリーとして出現する小役前兆の仕組みを確認。
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル ソフィア一覧 — https://5goki.com/sopia
   - 2012年2月導入、機械割96.9/97.8/98.7/100.2/103.2/105.6%を照合。
   - reliability: RETROSPECTIVE_DATABASE
7. pacnk — https://pacnk.com/slot/tools/sh_cherryparadise.html
   - 2012年2月導入、設定別BIG/REG、天井非搭載を確認。PAYOUT欄は複数箇所に異常/差異があるため主値に不採用。
   - reliability: RETROSPECTIVE_ANALYSIS_WITH_DATA_QUALITY_NOTE
8. グリーンべると「ソフィアから『小役前兆型告知機』第2弾登場」 — https://web-greenbelt.jp/00001712/
   - 2012年11月記事でチェリーパラダイスを「今年2月にリリースされた第1弾」と回顧し、シリーズ系譜を照合。
   - reliability: INDUSTRY
9. パチビー回顧 — https://www.pachibee.jp/ivent/view/2987
   - チェリーパラダイスをソフィア2012年2月機として回顧し、小役前兆型仕様を照合。
   - reliability: INDUSTRY_RETROSPECTIVE

## missingFields

- 50枚あたりゲーム数/ベースの直接公表値
- 設定変更時の一時的な告知/成立状態・リール挙動
- 据え置き時の一時状態保持
- 単純電源OFF→ON時の挙動
- ガックン/初期出目/ランプ等による本機固有の変更判別
- 朝一専用の公開数値

## conflicts

- payoutRateBySetting: HAZUSE/パチマガスロマガ/5号機クロニクル=96.9/97.8/98.7/100.2/103.2/105.6%。pacnkは96.30/967.80/98.60/100.10/103.20/105.50%で、設定2は明白な桁異常。平均せず前者を主値、pacnk値をCONFLICT_NOTEとして保持。
- BIG設定2: HAZUSE/P-WORLD系=1/284.9、パチマガスロマガ検索取得値=1/284.0。主値は1/284.9、差異を保持。
- ボーナス合算設定5: HAZUSE=1/167.5、パチマガスロマガ=1/167.6。丸め差として保持。

## confidenceSummary

- release: HIGH_FOR_EXACT_LEGACY_DATE_PLUS_MONTH_CORROBORATION
- formal model/approval: HIGH_LEGACY_DATABASE_DIRECT
- payout/core probability: HIGH_WITH_MINOR_CONFLICTS
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- basic payout: HIGH
- ceiling/non-AT structure: HIGH
- setting-change/carryover/power-cycle/gakkun: UNVERIFIED_AFTER_RESEARCH_EXCEPT_NON_APPLICABLE_FIELDS
