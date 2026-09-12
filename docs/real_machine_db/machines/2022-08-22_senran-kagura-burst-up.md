# パチスロ閃乱カグラ BURST UP

recordNo: 1514
machineName: パチスロ閃乱カグラ BURST UP
manufacturer: オーイズミラボ
formalModel: S閃乱カグラBURSTUP／L4
inspectionCode: 2S0491
releaseDate: 2022-08-22
generation: 6.5号機
systemType: AT / 高純増ST型・差枚獲得パート

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.8%（導入前独自調査に98.9%表記あり）
- 設定3: 100.5%
- 設定4: 103.2%
- 設定5: 105.3%
- 設定6: 107.3%

設定2のみ資料に98.8% / 98.9%の丸め・掲載差があるため平均せず注記。canonicalは複数解析掲載の98.8%を採用する。

信頼度: ANALYSIS_HIGH / SETTING2_MINOR_CONFLICT

## initialHitBySetting
### 爆乳ハイパーバトル初当り
- 設定1: 1/344.6
- 設定2: 1/352.4
- 設定3: 1/346.1
- 設定4: 1/350.1
- 設定5: 1/345.7
- 設定6: 1/347.8

### AT初当り
- 設定1: 1/558.7
- 設定2: 1/533.3
- 設定3: 1/501.4
- 設定4: 1/458.6
- 設定5: 1/435.6
- 設定6: 1/406.4

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 39.9G/50枚（解析値）
- 業界・導入前資料では約40G/50枚表記。

信頼度: ANALYSIS_HIGH

## netIncrease
- AT: 約+8.1枚/G

信頼度: INDUSTRY_HIGH

## basicPayout
- メインAT「RANK UP BURST」は8GのST型。
- STで5人突破すると枚数上乗せ「BURST ATTACK」へ移行。
- 上乗せした差枚は「EXTRA BURST」で約8.1枚/Gの高純増消化。
- AT終了後は「真閃乱ルーレット」を経由し、再度「爆乳ハイパーバトル」からAT復帰を目指す。
- 上位AT「絶超BURST」も搭載するが、完全再現向けの詳細内部抽選は本DB対象外。

信頼度: INDUSTRY

## modeSpecificMinimumData
- 通常時は規定ゲーム数到達で「爆乳ハイパーバトル」へ移行し、5戦中3勝でAT突入。
- 通常のモード別天井: モードA 581G+前兆 / モードB 381G+前兆 / 天国・超天国 81G+前兆。
- 設定変更後・AT終了後など有利区間移行時は天井が短縮され、モードA 281G / モードB 381G / 天国・超天国 81Gが目安。
- 有利区間移行時モード振り分け: A 33.2% / B 45.7% / 天国 19.5% / 超天国 1.6%。
- 有利区間天井は3000Gとする解析がある。今回の物差し用途では朝一リセット挙動を優先し、詳細到達恩恵抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_UNVERIFIED_POWER_CYCLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態・通常モードをRESET。
- 朝一表示ステージは商店街。
- 設定変更後は有利区間移行時のモード抽選を行う。
- 規定ゲーム数天井は選択モードにかかわらず最大381Gへ短縮される。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態・通常モードをCARRY_OVER。
- 朝一表示ステージは設定変更時と同じ商店街のため、ステージだけでは判別できない。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時について、天井G数・有利区間・通常モード・内部状態を直接比較した本機固有の高信頼資料を、機種名/型式/電断表現を変えて再探索したが確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き契約から純電断を推測転記しない。

### gameCounterReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常時モードA天井は最大581G+前兆。
- 設定変更後・有利区間移行時は最大381G+前兆へ短縮。
- 有利区間移行時のモード別目安: A 281G / B 381G / 天国 81G / 超天国 81G。

### modeAfterReset
- 設定変更時は通常モードを再抽選。
- 有利区間移行時: モードA 33.2% / モードB 45.7% / 天国 19.5% / 超天国 1.6%。
- 天国以上合算は21.1%。
- 据え置き時はモードCARRY_OVER。

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 据え置き時: 内部状態CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 本機は朝一の有利区間ランプによる変更判別を利用できない。

### resetBenefits
- 最大天井が381Gへ短縮。
- 有利区間移行時は21.1%で天国以上。天国/超天国なら81G+前兆が天井目安。
- モードAでも設定変更後は581Gから281Gへ短縮される。

### resetPenalties
- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のため、朝一の見た目だけで設定変更/据え置きを直接判別できない。
- 設定変更後は最大381G天井のため、朝一381Gを超えて規定ゲーム数当選しない場合は据え置き濃厚材料となる。
- 朝一ステージは設定変更・据え置きとも商店街。
- 本機固有のガックン条件/発生率は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- 有利区間移行時モード: A 33.2% / B 45.7% / 天国 19.5% / 超天国 1.6%。
- 天国以上合算: 21.1%。
- 設定変更後最大天井: 381G+前兆。
- 設定変更後モード別天井目安: A 281G / B 381G / 天国 81G / 超天国 81G。
- 裏モード振り分け（設定変更時・AT終了時）:
  - 設定1: 通常83.6% / 柳生15.6% / 氷王0.4% / 雪泉0.4%
  - 設定2: 通常81.3% / 柳生18.0% / 氷王0.4% / 雪泉0.4%
  - 設定3: 通常80.1% / 柳生19.1% / 氷王0.4% / 雪泉0.4%
  - 設定4: 通常78.9% / 柳生20.3% / 氷王0.4% / 雪泉0.4%
  - 設定5: 通常77.0% / 柳生22.3% / 氷王0.4% / 雪泉0.4%
  - 設定6: 通常74.2% / 柳生25.0% / 氷王0.4% / 雪泉0.4%

### publicMorningNumbers
- 設定変更/有利区間移行時の通常モード振り分けと381G短縮天井を採用。
- 裏モード設定別振り分けも設定変更時専用の公開比較値として保持。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `閃乱カグラ BURST UP / 閃乱カグラBURSTUP / S閃乱カグラBURSTUP/L4 / 2S0491 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / 有利区間 / ランプ / ガックン`。
- 業界記事、HAZUSE、なな徹、複数解析、旧来の新台一覧を横断。
- 設定変更と据え置きは直接比較表を取得。純電源OFF→ONのみは本機固有の直接契約が見つからず、一般的6.5号機挙動から補完しない。

## conflicts
- 設定2の出玉率は解析資料で98.8%、一部導入前独自調査で98.9%。平均化せず98.8%をcanonical、98.9%を競合注記として保持。
- 導入前動画等に「天井381G+α」とだけ記す資料があるが、後の解析では通常モードA 581G、有利区間移行時のみ最大381Gと整理されている。定義差を分離し、通常天井とリセット後天井を混同しない。

## missingFields
- 純電源OFF→ONのみの天井G数 / 有利区間 / 通常モード / 内部状態の直接契約
- 本機固有ガックン条件/発生率

## sources
取得日: 2026-09-13

1. HAZUSE — 型式・検定番号・導入日・基本スペック
   - https://hazuse.com/machine/pachislot/2S0491/
   - reliability: INDUSTRY / ANALYSIS_HIGH
2. P-WORLD / Greenbelt — オーイズミ初の6.5号機発表
   - https://news.p-world.co.jp/articles/21172/greenbelt
   - 2022-08-22導入、純増約8.1枚/G、AT初当り1/558.7〜1/406.4、出玉率97.8〜107.3%
   - reliability: INDUSTRY
3. P-WORLD / 遊技日本 — プレス説明会
   - https://news.p-world.co.jp/articles/21157/nippon
   - 型式、ゲームフロー、ST8G、純増8.1枚/G、導入8/22
   - reliability: INDUSTRY
4. なな徹 — 朝一・設定変更時の挙動
   - https://nana-press.com/kaiseki/machine/410/11061/
   - 設定変更/据え置きの有利区間・天井・内部状態・モード比較、最大381G短縮、変更判別
   - reliability: ANALYSIS_HIGH
5. なな徹 — 通常時モード
   - https://nana-press.com/kaiseki/machine/410/10917/
   - 有利区間移行時モードA33.2/B45.7/天国19.5/超天国1.6%
   - reliability: ANALYSIS_HIGH
6. なな徹 — 設定判別/裏モード
   - https://nana-press.com/kaiseki/machine/410/11436/
   - 設定変更時・AT終了時の裏モード設定別振り分け
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — 基本スペック・天井・モード
   - https://chonborista.com/slot/oizumi-slot/171487/
   - 39.9〜約40G/50枚、通常天井581G、有利区間移行時381G短縮、モード振り分け
   - reliability: ANALYSIS_HIGH
8. Greenbelt新台スケジュール — 2022-08-22群監査
   - https://news.p-world.co.jp/articles/21494/greenbelt
   - 8/22パチスロ欄は本機1機
   - reliability: INDUSTRY

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_UNVERIFIED_POWER_CYCLE
confidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET / UNVERIFIED_POWER_CYCLE
