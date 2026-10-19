# No.1210 パチスロ トータル・イクリプスLv.MAX-RT

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ トータル・イクリプスLv.MAX-RT
- manufacturer: SANKYO
- releaseDateCanonical: 2018-07-02
- generation: 5.9号機 / 5号機
- systemType: A+RT / ボーナス+RT
- formalModelName: `パチスロトータル・イクリプスNb`
- certificationNumber: `7S1720`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- SANKYO公式オンライン博物館は導入年月を2018.07とする。
- グリーンべるとの2018-05-21内覧会記事は納品を2018-07-01から予定とする。
- HAZUSE、すろ・ぱち(解)、すろぱちくえすとはホール導入日2018-07-02で一致するためcanonicalを2018-07-02とする。
- confidence: `OFFICIAL / INDUSTRY / ANALYSIS_HIGH_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 96.9%
- setting2: 99.9%
- setting5: 103.6%
- setting6: 110.0%

### initialHitBySetting
BIG合成（全設定共通）:
- setting1/2/5/6: 1/468

CB:
- setting1: 1/496
- setting2: 1/375
- setting5: 1/297 `CANONICAL`
- setting6: 1/200

ボーナス合成:
- setting1: 1/240
- setting2: 1/208
- setting5: 1/182
- setting6: 1/140

BIG内訳（全設定共通）:
- 同色BIG: 1/1170
- 異色BIG: 1/1170
- BAR-BIG: 1/2340

### baseGamesPer50
- 約32.0G/50枚（設定1代表値）。

### netIncrease
- RED SHIFT TIME（RT）: 約0.7枚/G。

### basicPayout
- BIG: 約240枚。
- CHARGE MODE（CB）: 最大約125枚（技術介入あり）。
- BIG終了後は100G / 200G / 400GのRTへ必ず突入。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- BIG後はJUDGEMENT ATTACK等を経由し、RT `RED SHIFT TIME`へ突入。
- RT継続は100G / 200G / 400G。BIG種別により振り分け差がある。
- RT中CB後は消化中RTへ復帰。RT中BIG後はRTゲーム数を再抽選。
- 通常時の演出バランスは3モードから任意選択可能。
- 全RT振り分けテーブルは設定推測の詳細に寄るため物差し必須値には採用しない。

## resetBehavior

### settingChangeBehavior
- HAZUSE機種別資料で設定変更時は`RT状態リセット`。
- ステージは`基地ステージ`へ移行。
- 演出モードは`ミドル`へ移行。
- confidence: `ANALYSIS_HIGH`。

### carryOverBehavior
- 据え置きを「設定変更なし・純電断なし」の独立条件としてRT/ステージ/演出モードを明記した本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 電源OFF→ONの直接資料は別項目へ記録し、据え置き一般論と同一視しない。

### powerCycleBehavior
- HAZUSE機種別資料で純電源OFF→ON時は`RT状態を引き継ぐ`。
- ステージ、演出モードも引き継ぐ。
- ただし電源OFFのまま一定時間経過した場合は`基地ステージ`と`ミドル`へ変更される旨の注記あり。
- confidence: `ANALYSIS_HIGH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- RT残りゲーム数については設定変更時RT自体がリセット、純電断ではRT状態引継ぎを直接確認。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更時の演出モード: `ミドル`。
- 純電源OFF→ON: 演出モード引継ぎ。ただし長時間OFFではミドルへ変更される注記あり。
- 出玉に関わる朝一専用内部モード/モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- RT state / settingChange: `RESET`
- RT state / powerOFFToON: `CARRYOVER`
- display stage / settingChange: `基地ステージ`
- display stage / powerOFFToON: `CARRYOVER`（長時間OFF時は基地ステージへ変更の注記）
- 独立した通常内部高確等の本機固有リセット契約: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機はA+RTで、今回確認した資料では有利区間を主要ゲーム状態として扱う必要のあるAT/ART機ではないため、物差し上は `NOT_APPLICABLE_TO_PRIMARY_RT_SYSTEM`。
- 有利区間一般論からの補完は行わない。

### resetBenefits
- 設定変更固有の天井短縮、朝一ボーナス優遇、RT直行等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時は前日のRT状態を維持せずリセットされるため、前日RT残存があるケースでは持越し不可が実質的な不利要素。
- その他の設定変更固有ペナルティ公開値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- HAZUSEは`RT状態以外での変更判別は困難`とする。
- すろぱちくえすとは`ガックンする可能性有り`と記載するが、発生率・確定性は公開されていないため `POSSIBLE_GAKKUN_NONDETERMINISTIC`。
- メニュー履歴とデータカウンターの当日回転数/RTゲーム数差も推測材料として紹介されるが、確定判別契約には昇格しない。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 朝一特定G以内のボーナス当選率、設定変更専用RT振り分け、ガックン発生率等の公開数値は、検索語・資料系統を変えた再探索後も固定できず。

## conflicts
- `CONFLICT_CB_SETTING5`: HAZUSE、すろ・ぱち(解)は設定5 CBを`1/297`とし、これをcanonical採用。みんスロは`1/257`とする。ボーナス合算1/182との整合と複数資料一致を優先し、1/257はsecondary conflictとして保持。
- manufacturer表記について一部二次資料に`ビスティ`表記があるが、SANKYO公式、業界記事、HAZUSE等がSANKYOで一致するためmanufacturerはSANKYOをcanonicalとする。

## missingFields
- 据え置きを純電断と分離した独立条件でのRT/ステージ/演出モード契約。
- ガックンの発生率・確定性。
- 設定変更専用の朝一当選率/モード振り分け。

## sources
取得日: 2026-09-10

1. SANKYOオンライン博物館 — パチスロ トータル・イクリプスLv.MAX-RT
   - https://www.sankyo-fever.jp/collection/889/
   - 2018.07導入、SANKYO、BIG240枚、CB最大125枚、RT純増約0.7枚/G、100/200/400G RT。
   - confidence: `OFFICIAL`
2. グリーンべると — RT中のCBが出玉へのトリガー
   - https://web-greenbelt.jp/00010455/
   - 2018-05-21記事。A+RT、ボーナス合算1/240～1/140、BIG240枚、CB最大125枚、RT純増約0.7枚/G、納品7/1～予定。
   - confidence: `INDUSTRY`
3. HAZUSE — パチスロ トータル・イクリプスLv.MAX-RT
   - https://hazuse.com/machine/pachislot/7S1720/
   - 導入2018-07-02、型式`パチスロトータル・イクリプスNb`、検定`7S1720`、設定別CB/ボーナス合算、約32G/50枚、天井非搭載、設定変更/電源OFF→ON時のRT・ステージ・演出モード契約。
   - confidence: `ANALYSIS_HIGH`
4. すろ・ぱち(解) — パチスロ トータル・イクリプスLv.MAX-RT 解析情報
   - https://kaiseki.sulopachinews.com/archives/539
   - 導入2018-07-02、4段階設定、設定別CB/合算/機械割、約32G/50枚、RT純増約0.7枚/G。
   - confidence: `ANALYSIS_HIGH`
5. パチマガスロマガ — パチスロトータル・イクリプス Lv.MAX-RT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/49/a.php
   - 2018年7月、BIG約240枚、CB最大約125枚、BIG後100/200/400G RT、純増約0.7枚/G。
   - confidence: `ANALYSIS_HIGH`
6. すろぱちくえすと — トータルイクリプス MAX-RT / 設定判別
   - https://www.slopachi-quest.com/article/total-eclipse-rt/
   - https://www.slopachi-quest.com/article/total-eclipse-maxrt-settei/
   - 導入2018-07-02、天井非搭載、ガックン可能性、メニュー履歴による変更推測材料。
   - confidence: `ANALYSIS_HIGH`
7. みんスロ — トータル・イクリプスLv.MAX-RT
   - https://minslo.com/%E3%83%88%E3%83%BC%E3%82%BF%E3%83%AB%E3%83%BB%E3%82%A4%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B9lv-max%E2%80%90rt/
   - 設定5 CBを1/257とするためCONFLICT保持。メーカーをビスティとする二次資料表記差も保持。
   - confidence: `ANALYSIS_SINGLE / CONFLICT`

## confidenceSummary
- release/model/certification: `OFFICIAL + ANALYSIS_HIGH_CROSSCHECKED`
- performance core: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBehavior RT/stage/display-mode: `ANALYSIS_HIGH`
- resetDetection: `ANALYSIS_HIGH_WITH_NONDETERMINISTIC_GAKKUN`
- conflicts: `EXPLICITLY_PRESERVED`
