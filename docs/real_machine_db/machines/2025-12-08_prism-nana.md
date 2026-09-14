# プリズムナナ

recordNo: 1765
machineName: プリズムナナ
aliases: まじかるすいーと プリズム・ナナ / スマスロ プリズムナナ / LプリズムナナCC / ＬプリズムナナＣC
manufacturer: カルミナ
formalModel: LプリズムナナCC
inspectionCode: 5S0937
releaseDate: 2025-12-08
generation: 6.5号機 / スマスロ
systemType: AT / ST×擬似ボーナス / 周期抽選 / CZ
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- HAZUSEで型式 `LプリズムナナCC`、検定番号 `5S0937`、2025-12-08導入、メーカー カルミナを確認。
- 2025年検定通過一覧でもカルミナ `LプリズムナナCC` / 5S0937系を確認。
- パチビー、必勝本、1gekiでも2025-12-08導入が一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.5%
- setting3: 100.1%
- setting4: 105.5%
- setting5: 110.1%
- setting6: 114.9%
initialHitBySetting:
  stInitial:
  - setting1: 1/351.8
  - setting2: 1/346.9
  - setting3: 1/337.2
  - setting4: 1/306.6
  - setting5: 1/290.1
  - setting6: 1/278.6
baseGamesPer50: 約31.2G/50枚
netIncrease:
- 通常擬似ボーナス系: 約3.0枚/G
- 白7系: 約7.0枚/G
basicPayout:
- SUPER PRISM BONUS: 約280枚
- PRISM BONUS: 約120枚
- PRISM CHANCE: 約60枚
- SPECIAL BONUS: 平均約800枚
modeSpecificMinimumData:
- CZ「強く願えば必ず至る!」は7G継続、成功期待度約41%。
- ST「BURNING ZONE」は7G+α、初回成功後のループ率約80%。
- 上位ST「LIGHTNING ZONE」はループ率約90%、設定1で通常時へ戻るまでの期待獲得約3000枚と解析資料に記載。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_POWER_CYCLE_MODE_AND_CEILING_DATA
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時は天井ゲーム数・周期数をRESET、モード・状態を再抽選。
- プリズムポイント表示は0pt、マジカルリール演出カウンターは「??」表示になるが、設定変更では内部値もリセット扱い。
- 通常899G+αのゲーム数天井は555G+αへ短縮。
- 通常最大7周期の周期天井は最大5周期へ短縮。
- 設定変更時は通常B以上が濃厚。
- 必勝本では設定変更時の演出キャラはイタル、開始ステージは通学路ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き専用の独立一次表は今回固定できなかったが、設定変更を伴わない電源OFF→ON時は天井ゲーム数・周期数・モード・状態を引き継ぐ直接比較表がある。
- ホール運用上の据え置きはこの純電断引継ぎ挙動と整合するため `CARRY_OVER_POWER_CYCLE_DIRECTLY_SUPPORTED` として保持する。
- 有利区間ランプでは設定変更/据え置き判別不可。
confidence: ANALYSIS_HIGH_FOR_POWER_CYCLE / ANALYSIS_SUPPORTED_FOR_CARRY_OVER

### powerCycleBehavior
- 電源OFF→ON時は天井までのゲーム数、天井までの周期数、モード、状態を引き継ぐ。
- プリズムポイントは表示上0ptだが内部的に引き継ぐ。
- マジカルリール演出カウンターは表示上「??」だが内部的に引き継ぐ。
- 電源OFF→ON時の演出キャラ・ステージ・内蔵データ表示挙動は必勝本で調査中のため推測しない。
confidence: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
settingChange: RESET
carryOver: CARRY_OVER_POWER_CYCLE_DIRECTLY_SUPPORTED
powerCycle: CARRY_OVER
notes:
- 通常ゲーム数天井899G+α、設定変更後555G+α。
- 通常周期天井最大7周期、設定変更後最大5周期。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalGameCeiling: 899G+α
resetGameCeiling: 555G+α
normalCycleCeiling: 最大7周期
resetCycleCeiling: 最大5周期
ceilingBenefit: 初当たり当選 → プロローグ経由でST「BURNING ZONE」
reductionGames: 344G
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常Aを否定し、通常B以上。
- 全設定共通の公開振り分けを複数解析資料で照合。
resetModeDistribution:
- 通常A: 0%
- 通常B: 33.98%
- チャンス: 15.63%
- 天国: 50.00%
- 超天国: 0.39%
modeCycleCeilings:
- 通常A: 7周期
- 通常B: 5周期
- チャンス: 3周期
- 天国: 1周期
- 超天国: 1周期
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時: 再抽選。
- 電源OFF→ON時: 引き継ぐ。
- 設定変更時の状態別具体振り分け率は検索語・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時は有利区間RESETと解析資料で明記。
- エンディング終了後も有利区間リセット。
- エンディング後の有利区間リセットでは上位ST「LIGHTNING ZONE」へシームレスに突入する実戦上の恩恵があるが、資料は明確に「設定変更時を除く」としているため朝一恩恵へ転記しない。
- 有利区間ランプで設定変更/据え置き判別はできない。
- 純電源OFF→ON時の有利区間そのものを独立比較した高優先直接文言は今回固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_WORDING

### resetBenefits
- ゲーム数天井899G+α → 555G+αへ344G短縮。
- 周期天井最大7周期 → 最大5周期へ短縮。
- 通常B以上スタート。
- 設定変更時モードは通常B33.98%、チャンス15.63%、天国50.00%、超天国0.39%。天国以上合計50.39%。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日の天井進行・周期進行・モード・状態・内部ポイント等の持越し価値は設定変更で失われる。
- エンディング後の有利区間リセット時に発生する上位ST直行恩恵は設定変更時を除外するため、設定変更朝一には適用されない。
- その他の設定変更固有冷遇率/不利率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一555G+αを明確に超えてST非当選なら据え置き濃厚材料。
- 有利区間ランプによる変更判別は不可。
- 設定変更時はイタル/通学路開始という資料があるが、純電断側の開始演出は調査中のため、それ単独を確定判別には用いない。
- `プリズムナナ / まじかるすいーと プリズム・ナナ / LプリズムナナCC / カルミナ + ガックン / リールガックン / 設定変更 / 朝一 / 据え置き / 電源OFF ON` で再探索したが、本機固有ガックン条件・発生率を高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalGameCeiling: 899G+α
resetGameCeiling: 555G+α
resetGameCeilingReduction: 344G
normalCycleCeiling: 7周期
resetCycleCeiling: 5周期
resetModeDistribution:
- 通常B: 33.98%
- チャンス: 15.63%
- 天国: 50.00%
- 超天国: 0.39%
resetHeavenOrBetterTotal: 50.39%
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH
publicMorningNumericValues:
- 899G+α → 555G+α
- 7周期 → 最大5周期
- 通常B 33.98%
- チャンス 15.63%
- 天国 50.00%
- 超天国 0.39%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- 設定別ST初当り・機械割は必勝本、1geki、パチマガスロマガ系、後発解析で一致し重大CONFLICTなし。
- 型式表記は全角 `ＬプリズムナナＣC` と半角 `LプリズムナナCC` が混在するが同一型式として正規化。
- 有利区間リセット後の上位ST直行はエンディング後の恩恵であり、設定変更時は明示除外されている。朝一リセット恩恵とは分離。

## sources
retrievedAt: 2026-09-15
- HAZUSE 機種情報: https://hazuse.com/hd/5s0937/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/5S0937/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4635/1/112851
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/88482/
- 1geki 機種解析: https://1geki.jp/slot/l_prismnana/
- パチビー 機種情報: https://www.pachibee.jp/machines/index/225110002
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/1068/33395/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1068/33396/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1068/33392/
- パチマガスロマガ系 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/08/tj06.php
- ちょんぼりすた: https://chonborista.com/slot/carmina/244460/
- パチビー 2025年12月導入一覧: https://www.pachibee.jp/machines/schedule/2025-12
- ALL7 2025年12月導入一覧: https://www.all7.jp/plans/index/2025/12/10

## missingFields
- 純電源OFF→ON時の有利区間そのものの高優先直接文言: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
- 設定変更時の内部状態具体振り分け率: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## boundaryContext
- 2025-12-08群はパチビー/ALL7で `プリズムナナ / 銀河英雄伝説 Die Neue These / スマスロ 化物語` の3機が一致。
- 本レコードはその1/3。境界はOPENのまま。
