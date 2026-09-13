# スマスロキングパルサー

recordNo: 1629
machineName: スマスロキングパルサー
aliases: Lキングパルサー / スマスロ キングパルサー / キンパル
manufacturer: セブンリーグ（山佐ネクスト）
formalModel: LキングパルサーSLCC
inspectionCode: 3S1231
releaseDate: 2024-03-04
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+ストック・ループ / CZ搭載
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 山佐ネクスト発表を扱うAmusement Japan、P-WORLD/HAZUSE/主要解析で2024-03-04導入が一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 山形県公安委員会の検定通過を報じたグリーンべるとで型式 `LキングパルサーSLCC` を確認。
- HAZUSEで型式 `LキングパルサーSLCC`、検定番号 `3S1231` を確認。
confidence: INDUSTRY_FOR_MODEL / ANALYSIS_HIGH_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.6%
- setting4: 105.5%
- setting5: 110.3%
- setting6: 114.9%
- settingL: 公開固定値確認できず
initialHitBySetting:
- setting1: BIG 1/257.6 / REG 1/387.8 / 合算 1/154.8
- setting2: BIG 1/251.4 / REG 1/378.4 / 合算 1/151.0
- setting4: BIG 1/210.0 / REG 1/324.2 / 合算 1/127.4
- setting5: BIG 1/191.8 / REG 1/298.8 / 合算 1/116.8
- setting6: BIG 1/173.6 / REG 1/274.9 / 合算 1/106.4
- settingL: 調査中/公開固定値なし
baseGamesPer50: 約32.6～32.9G/50枚（設定1～6）
netIncrease:
- 疑似ボーナス: 約5.0枚/G
basicPayout:
- BIG: 平均約307枚
- REG: 平均約105枚
- CZ「スコールチャンス」: 3～5G / 基本期待度約40%、雷雨状態約70%
- 初当たり時ボーナスループ当選: 約1/3
- ストック保有時: 128G以内ボーナス期待度約70%（ボーナスループ/CZ/リーチ目役当選含む解析表現）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数消化、CZ「スコールチャンス」、リーチ目役などから疑似ボーナスを目指す。
- 通常時最大天井は960G、到達でボーナス当選。
- 規定ゲーム数はテーブル管理。設定変更時は専用テーブルを参照することが主要解析で明記されるが、専用テーブルの全数値振り分けは公開固定値を確認できない。
- ボーナス初当たり時は約1/3でボーナスループ。ループ継続時は32G以内にボーナス当選。
- ボーナスストック保有時は33～128Gで放出抽選があり、128G以内期待度約70%。32G以内のループ当選ではストックを消費しない。
- 通常時CZ抽選は5段階のCZレベルで管理。CZ当選までレベルは基本的に転落しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_STOCK_AND_GACKUN
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数をRESETし、通常最大960Gから最大512Gへ短縮。
- 規定ゲーム数は設定変更時専用テーブルを参照。
- CZレベルは再抽選。
- ストックの設定変更時処理は当時の必勝本比較表でも「現在調査中」。後年資料まで再探索したが、消去/維持/再抽選を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- プレイヤー選択の演出モードについても当時比較表は設定変更時「現在調査中」。内部規定Gテーブルと混同しない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_TABLE_AND_CZ_LEVEL / UNVERIFIED_FOR_STOCK_AND_DISPLAY_MODE

### carryOverBehavior
- 据え置きでは天井進行をCARRY_OVER。
- CZレベルおよびボーナスストックは、設定変更を伴わない電源OFF→ON時に引き継ぐ機種固有比較表を確認。
- 据え置き時の有利区間は継続扱い。
- 現在選択中の規定ゲーム数テーブル識別子そのものを「据え置き」と明記した一次/主要解析は十分な再探索後も固定できず、天井進行引継ぎから推測補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_CZ_LEVEL_STOCK_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_TABLE_IDENTITY

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数をCARRY_OVER。
- ボーナスストックをCARRY_OVER。
- CZレベルをCARRY_OVER。
- サブ液晶はホタルなしの画面へ移行する。
- 有利区間は設定変更を伴わないためCARRY_OVERとする攻略整理を確認。
- プレイヤー選択の演出モードについて当時の必勝本比較表は「現在調査中」で、復帰状態を固定しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_STOCK_CZ_LEVEL_AND_ADVANTAGEOUS_SECTION / UNVERIFIED_FOR_DISPLAY_MODE

### gameCounterReset
- 通常天井: 最大960G。
- 設定変更: RESETし最大512Gへ短縮。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更後は最大512Gでボーナス当選。
- 通常最大960Gから448G短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 規定ゲーム数は設定変更時専用テーブルを参照。
- 設定変更後は128G以内の当選率が高い傾向を示す実戦データ系資料があるが、これはメーカー公表の固定抽選値ではない。
- 専用テーブルの各規定ゲーム数振り分け率は、山佐系/業界/必勝本/なな徹/パチマガスロマガ/HAZUSE/P-WORLD/旧攻略・後年回顧を横断しても公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DEDICATED_TABLE_EXISTENCE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_DISTRIBUTION

### stateAfterReset
- CZレベルは設定変更時に再抽選。
- 純電源OFF→ON時はCZレベルを引き継ぐ。
- ボーナスストックの設定変更時処理は `UNVERIFIED_AFTER_RESEARCH`、純電源OFF→ON時は引き継ぐ。
confidence: ANALYSIS_HIGH_FOR_CZ_LEVEL_AND_POWER_CYCLE_STOCK / UNVERIFIED_FOR_SETTING_CHANGE_STOCK

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常稼働中は差枚数が2050枚を超えたボーナス終了時（1G連/即CZがある場合を除く）にも有利区間をリセット。
- 通常稼働中の有利区間リセット恩恵「32G以内ボーナス+70% or 90%ループ（90%選択50%以上）」は、なな徹が明示的に「設定変更時以外」と区別しているため朝一設定変更恩恵へ流用しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- 最大天井960G→512G短縮が明確な朝一恩恵。
- 規定ゲーム数は設定変更専用テーブル参照。
- 実戦データでは設定変更後の128G以内当選率上昇傾向が報告されるが、固定抽選率としては採用しない。
- 通常稼働中の有利区間リセットに付随する32G以内ボーナス+高継続ループは設定変更時対象外。
confidence: ANALYSIS_HIGH_FOR_512G_AND_DEDICATED_TABLE / OBSERVATIONAL_ONLY_FOR_128G_TREND

### resetPenalties
- 据え置きなら保持される前日天井進行/CZレベル/ストックが、設定変更では少なくとも天井進行は消去、CZレベルは再抽選される。
- ストックは設定変更時処理未確定のため「消える」と断定しない。
- 設定変更専用の公開マイナス数値は確認できず。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_CZ_LEVEL / UNVERIFIED_FOR_STOCK / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 朝一512Gを超えてボーナス非当選なら、設定変更専用最大天井と整合しないため据え置き濃厚材料。
- 設定変更/電源OFF→ONともサブ液晶はホタルなし画面となるため、ホタル表示だけでの確定判別は不可。
- 泡占いは据え置きでも朝一0Gから128G消化ごとに出現するため、表示タイミングのみで前日内部ゲーム数を直接判定できない。
- 有利区間ランプ単独による設定変更判別を可能とする機種固有の確定条件は主要解析で確認できない。
- 本機固有ガックン条件/発生率は `スマスロキングパルサー / LキングパルサーSLCC / キンパル / セブンリーグ / 山佐` × `ガックン / リール / 設定変更 / リセット / 据え置き / 朝一 / 電源OFF ON` で再探索したが、一次/主要解析で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_512G_AND_DISPLAY_BEHAVIOR / UNVERIFIED_FOR_GACKUN

### numericResetData
- 通常最大天井: 960G。
- 設定変更後最大天井: 512G。
- 天井短縮幅: 448G。
- 設定変更専用規定Gテーブル: 存在確認済み、各振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時CZレベル: 再抽選、各レベル振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時ストック数振り分け/消去率: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers
- 公開固定値として採用できる主要朝一数値は「最大512G天井」。
- 設定変更後128G以内当選率について実戦データ上の優遇傾向はあるが、メーカー/主要解析の固定振り分け率を確認できないため数値化しない。

## missingFields
- 設定変更時のボーナスストック処理: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用規定ゲーム数テーブルの各振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時CZレベルの各振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- プレイヤー選択演出モードの設定変更/電断復帰契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定Lの機械割/初当たり: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 主要性能値（設定1/2/4/5/6の機械割、BIG/REG/合算、ベース、純増）について今回の主要ソース間にcanonical値を変更する実質CONFLICTは確認できず。
- 「朝一128G以内が強い」は実戦データ/後年期待値資料の傾向であり、解析固定値と混同しないためCONFLICTではなく `OBSERVATIONAL_ONLY` として保持。

## sources
retrievedAt: 2026-09-14
- 山佐ネクスト発表を扱うAmusement Japan — 2024-03-04導入、BIG平均307枚、REG平均105枚、純増約5枚、ループ/ストック概要: https://amusement-japan.co.jp/article/detail/10004062/
- グリーンべると — 山形県公安委員会検定通過、型式 `LキングパルサーSLCC`: https://web-greenbelt.jp/post-78757/
- HAZUSE — 型式 `LキングパルサーSLCC`、検定番号3S1231、導入日、設定別機械割/ボーナス、32.6～32.9G、純増、天井: https://hazuse.com/machine/pachislot/3S1231/
- P-WORLD — 設定別ボーナス、機種仕様、有利区間リセット条件/通常時リセット恩恵: https://www.p-world.co.jp/machine/database/9985
- パチ&スロ必勝本 — 天井960G/設定変更512G、設定変更/電源OFF-ON比較（天井、ストック、CZレベル、演出モード、サブ液晶）: https://hisshobon.com/machineinfo/82899/
- パチ&スロ必勝本 基本スペック — 32.6～32.9G、BIG/REG平均獲得: https://p.hisshobon.jp/vpage/2599/2
- なな徹 機種TOP — 基本仕様/純増/ベース/天井/導入日: https://nana-press.com/kaiseki/machine/705/
- なな徹 規定G/天井 — 最大960G、設定変更時512G: https://nana-press.com/kaiseki/machine/705/19700/ / https://nana-press.com/kaiseki/machine/705/19694/
- なな徹 CZレベル — 5段階CZレベル: https://nana-press.com/kaiseki/machine/705/19699/
- なな徹 有利区間 — 設定変更時/差枚2050枚超でRESET、設定変更時以外のリセット恩恵を区別: https://nana-press.com/kaiseki/machine/705/19697/
- なな徹 通常演出/泡占い — 据え置き時も朝一0Gから128Gごとに泡占い: https://nana-press.com/kaiseki/machine/705/19705/
- パチマガスロマガ — 設定変更時は規定ゲーム数専用テーブル参照: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/05/tj04.php
- イチカツ（実戦データ/補助） — 設定変更後512G、128G以内当選率上昇傾向: https://ichikatsu.com/lkngpls/
- ぽこすろっと（後年攻略整理・補助） — 設定変更/電断比較、有利区間整理、判別材料: https://www.nankaikoya.jp/kingpulsar-kitaichi/
