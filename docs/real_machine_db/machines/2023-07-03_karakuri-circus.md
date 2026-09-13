# パチスロ からくりサーカス

recordNo: 1576
machineName: パチスロ からくりサーカス
manufacturer: SANKYO（三共）
formalModel: LからくりサーカスG
inspectionCode: 2S1798
releaseDate: 2023-07-03
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理 / 上位AT搭載
settings: 1 / 2 / 4 / 5 / 6 / L

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.7%
- 設定4: 103.0%
- 設定5: 108.1%
- 設定6: 114.9%
- 設定L: 83.7%（解析値。通常運用設定ではない）
信頼度: OFFICIAL_FOR_1_2_4_5_6 / ANALYSIS_HIGH_FOR_L / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ初当り
- 設定1: 1/333
- 設定2: 1/320
- 設定4: 1/292
- 設定5: 1/277
- 設定6: 1/275

### AT初当り
- 設定1: 1/564
- 設定2: 1/543
- 設定4: 1/469
- 設定5: 1/451
- 設定6: 1/447
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.9G/50枚（約33G/50枚表記の資料もあり、丸め差）
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 基本AT「からくりサーカス」: 約2.8枚/G
- 上位AT「超からくりサーカス」: 約7.6枚/G
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 基本AT「からくりサーカス」: 差枚数管理、初期150枚。
- 上乗せ契機「激情ジャッジ」成功時は3桁枚数上乗せ。成功期待度は約50%。
- 上位AT「超からくりサーカス」: 純増約7.6枚/G。上位AT突入時の「極限無双」は平均上乗せ約850枚。
- SANKYO公式オンライン博物館では「超からくりサーカス」終了後に「運命の一劇」へ移行し、成功で上位ATへ再突入する構造を確認。
信頼度: OFFICIAL / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時モード: 通常A / 通常B / 通常C / 天国。
- 通常A: 液晶1200G+αが最大域（実消化目安約730G）。規定G到達時はCZ。
- 通常B: 液晶800G+αが最大域（実消化目安約550G）。規定G到達時はCZ。
- 通常C: 液晶1200G+αが最大域（実消化目安約730G）。規定G到達時はAT直撃。
- 天国: 液晶100G以内（実消化目安約70G）でCZ以上。
- CZ「機械仕掛けの神」4連続失敗後、5回目の同CZ当選時はAT直撃へ書き換え。
- AT間2500G+αでAT + 成功確定の激情ジャッジ。
- モードは設定変更時などに当該分を含む5回分を内部的に先決めし、消化ごとに先の1回分を補充する解析が公開されている。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / 天井 / 内部状態 / モードをリセット**。
- 液晶表示・メニュー画面もリセット。
- 開始ステージは勝ステージ / 鳴海ステージの1:1。これは設定変更・据え置き共通のため単独判別材料にならない。
- 設定変更後のモード移行は **通常C選択が優遇**される。通常Cの規定ゲーム数到達はAT直撃となるため朝一の主要恩恵。
- 設定変更後の有利区間移行ゲーム（液晶1G目）では成立役に応じて特殊モード抽選。弱チェリー/スイカはチャンス、強チェリー/チャンス目は特殊モード濃厚。特殊モード当選時は通常B以上かつ天国期待度約50%。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / 天井 / 内部状態 / モードを引き継ぐ**。
- CZスルー状況・AT間ゲーム数等、各天井進行も内部的には引き継ぎ対象として扱う。
- 一方で液晶表示・メニュー画面は通常の長時間電断を伴う開店ではリセットされるため、見た目の0G表示だけでは変更判別できない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **有利区間 / 天井 / 内部モード / 内部状態を引き継ぐ**。
- 液晶表示・メニュー画面はリセットされる。ただし電源断時間が短い場合は表示が保持される場合があるとの機種固有解析あり。
- 開始ステージは勝 / 鳴海の1:1で、設定変更時と共通。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 天井進行、CZスルー進行、AT間ゲーム数をリセットして新たに管理開始。
- 据え置き / 純電源OFF→ON: 内部の天井進行を引き継ぐ。
- 据え置きでも液晶上のG数表示はリセットされ得るため、内部ゲーム数と表示ゲーム数を同一視しない。

### ceilingAfterReset
- 設定変更で通常時3種の天井進行はリセット。
- 「設定変更時だけ固定で○Gへ短縮」という単一天井短縮は確認されない。
- ただし通常C選択率が優遇されるため、AT直撃に到達するモード面の朝一優遇が存在する。
- モード別上限: 通常A/C 1200G、通常B 800G、天国100G（液晶G数基準）。
信頼度: ANALYSIS_HIGH

### modeAfterReset
- 設定変更: モード再抽選。**通常C選択率が優遇**。
- 据え置き / 電源OFF→ONのみ: モード引き継ぎ。
- 設定変更専用の通常A/B/C/天国の完全な公開振り分け率は、検索語・資料系統を変えた再探索でも固定できず `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- 有利区間移行1G目の特殊モード当選時は通常B以上、天国期待度約50%。

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き / 純電断: 内部状態引き継ぎ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き / 純電断: 有利区間引き継ぎ。
- 遊技中はエンディング終了後、および「運命の一劇」突入時の一部でも有利区間がリセットされる。
- 設定変更以外の有利区間リセット時は「運命の一劇」突入が恩恵として確認されるが、**設定変更時はこの恩恵の対象外**。朝一設定変更で「運命の一劇」へ直行すると誤記しない。
信頼度: ANALYSIS_HIGH

### resetBenefits
- 通常C選択率の優遇（規定G数到達時はAT直撃）。
- 有利区間移行1G目の特殊モード抽選。強チェリー / チャンス目は特殊モード濃厚、特殊モード当選時は通常B以上かつ天国期待度約50%。
- 内部天井・モード・状態を新規抽選状態から開始できる。

### resetPenalties
- 設定変更により前日の天井進行、CZスルー回数、AT間ゲーム数、内部モード・状態の蓄積を失う。
- 設定変更専用の追加ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・据え置きとも液晶G数、歯車カウンター、メニュー画面がリセットされ得るため、通常の朝一表示だけでの設定変更判別は困難。
- 設定変更・据え置きとも開始ステージは勝 / 鳴海を1:1で選択するため、開始ステージ単独でも判別不可。
- 前日が前兆ステージ「からくりエピソード」で終了し、翌朝も「からくりエピソード」から開始した場合は据え置き濃厚とする機種固有解析あり。
- 本機固有のリールガックンを設定変更確定級の要素として扱える直接資料は、表記揺れ・型式名・メーカー名と「ガックン / 設定変更 / 朝一」を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 朝一開始ステージ: 勝 / 鳴海 = **1:1**（設定変更・据え置き共通）。
- 特殊モード当選時: **通常B以上 + 天国期待度約50%**。
- 有利区間移行1G目: 強チェリー / チャンス目成立時は特殊モード濃厚。
- 設定変更時の通常C優遇率: **具体的な公開固定値は未確認**。
- リセット専用固定短縮天井: **NONE_CONFIRMED**。

### publicMorningNumbers
- 勝 / 鳴海ステージ選択: 1:1。
- 特殊モード当選時の天国期待度: 約50%。
- 設定変更時の通常C優遇は公開確認できるが、具体的な選択率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ からくりサーカス / スマスロからくりサーカス / からサー / LからくりサーカスG / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 通常C / 特殊モード / ガックン / 有利区間 / 前兆引き継ぎ` を組み替えて検索。
- SANKYO公式オンライン博物館、遊技日本/P-WORLD、公安委員会検定記事、なな徹、一撃、パチマガスロマガ、必勝本など別系統資料を横断。
- 設定変更専用の通常C具体振り分け率と機種固有ガックンは十分な再探索後も直接値を固定できず、推測補完しない。

## sources
取得日: 2026-09-13
- SANKYOオンライン博物館（公式・型式・CZ/AT・AT性能）: https://www.sankyo-fever.jp/collection/946/
- 遊技日本 / P-WORLD（型式・設定別CZ/AT・機械割）: https://news.p-world.co.jp/articles/23971
- 遊技日本 / P-WORLD（検定通過 LからくりサーカスG）: https://news.p-world.co.jp/articles/23987/nippon
- Ativo（検定番号2S1798・基本スペック）: https://ativo.jp/2023/05/16/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E3%82%B5%E3%83%BC%E3%82%AB%E3%82%B9/
- 一撃 機種TOP（導入日・検定番号・ベース・純増）: https://1geki.jp/slot/l_karakuri/
- 一撃 天井/朝一: https://1geki.jp/slot/l_karakuri/3/
- なな徹 CZ/AT確率・機械割: https://nana-press.com/kaiseki/machine/571/14946/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/571/15693/
- なな徹 天井: https://nana-press.com/kaiseki/machine/571/21225/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/571/22673/
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/59/kr01.php
- パチ＆スロ必勝本 規定ゲーム数&モード: https://p.hisshobon.jp/machine/4098/1/96515
- パチマガスロマガ 2023-07-03導入4機種集計: https://p.hisshobon.jp/vpage/2499/33
- 2023年導入日一覧（7/3の4機、次群7/18確認）: https://www.slopachi-quest.com/article/2023-dounyuukisyu/

## missingFields
- 設定変更時の通常A/B/C/天国 完全振り分け率: PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH
- 本機固有のリールガックンによる変更判別契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- ベースは約32.9G/50枚と約33G/50枚表記があるが丸め差として扱い、実質CONFLICTにはしない。
- 主要な設定別CZ/AT確率・機械割、純増、初期150枚に実質的CONFLICTなし。

coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
