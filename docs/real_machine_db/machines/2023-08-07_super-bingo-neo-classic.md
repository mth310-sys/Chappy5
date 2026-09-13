# スーパービンゴネオクラシック

recordNo: 1583
machineName: スーパービンゴネオクラシック
manufacturer: ベルコ販売製造 / ベルコ
formalModel: SスーパービンゴHH1
inspectionCode: 2S1848
releaseDate: 2023-08-07
generation: 6.5号機 / メダル機
systemType: AT / 周期抽選
settings: L / 1 / 2 / 3 / 4 / 6

## payoutRateBySetting
- 設定L: 非公開
- 設定1: 98.0%
- 設定2: 99.5%
- 設定3: 101.0%
- 設定4: 103.0%
- 設定6: 106.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BINGO CHANCE（BC）初当たり
- 設定L: 非公開
- 設定1: 1/354.6
- 設定2: 1/330.1
- 設定3: 1/315.8
- 設定4: 1/299.7
- 設定6: 1/283.8
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.5G/50枚
信頼度: ANALYSIS_HIGH

## netIncrease
- AT「BINGO CHANCE」: 約2.8枚/G
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BINGO CHANCE: 1セット33GまたはHooah!（111G以上）。
- 初回継続期待度約50%、2セット目以降約75%。
- 初当たり・継続・上乗せ時のHooah!発生は約1/15（約6.7%）。
- 999G+α天井契機のBCは約50%でHooah!。Hooah!発生時の期待枚数は900枚以上とする業界資料あり。
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はゾロ目ゲーム数による「ゲーム数周期」と、BINGO図柄揃い回数による「デジタル周期」の2系統でBCを抽選。
- ゲーム数周期BC期待度（全設定共通）: 111G 約20% / 222G 約10% / 333G 約20% / 444G 約10% / 555G 約15% / 666G 約10% / 777G 約27% / 888G 約11% / 999G 100%。
- 通常最大天井: 999G+αでBC。
- デジタル周期の通常初回規定回数振り分け: 11回20.0% / 33回26.7% / 55回20.0% / 77回33.3%。2回目以降は11回9.8% / 33回25.1% / 55回20.0% / 77回25.1% / 99回20.0%。
- 通常初回デジ周期到達時BC期待度: 設定1 約21.8% / 2 約25.1% / 3 約28.0% / 4 約31.0% / 6 約34.1%。
信頼度: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **ゲーム数周期 / デジタル周期 / 有利区間 / 天井をリセット**。
- 設定変更時は **少ないデジタル周期の振り分け**と**初回デジ周期到達時のBC期待度**が通常より優遇される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **ゲーム数周期 / デジタル周期 / 有利区間 / 天井を引き継ぐ**。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **ゲーム数周期 / デジタル周期 / 有利区間 / 天井を引き継ぐ**ことを機種固有比較表で直接確認。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 天井とゲーム数周期をリセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 引き継ぎ。

### ceilingAfterReset
- 通常最大天井: **999G+α**。
- 設定変更後も天井そのものを固定短縮する公開契約は確認できず、999G+αを基本とする。
- 朝一恩恵は天井短縮ではなく、デジタル周期振り分けと周期到達時BC期待度の優遇。
信頼度: ANALYSIS_HIGH

### modeAfterReset
- 独立した通常A/B等のモード契約ではなく、ゲーム数周期・デジタル周期の再セットとして扱う。
- 設定変更時の「少ないデジ周期優遇」は確認済みだが、設定変更専用の各規定回数の固定振り分け率は、表記揺れ・型式・メーカーを含め再探索しても公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き/純電断: デジタル周期を引き継ぐ。

### stateAfterReset
- 朝一客行動へ影響する独立した低確/高確等の設定変更専用状態契約は今回の公開資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 周期情報は上記の通り別途直接確認。

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 純電源OFF→ON: 有利区間引き継ぎ。
- 有利区間ランプでは設定変更/据え置き判別不可。
- 通常遊技では基本的にBC終了後、次のカウントダウン7開始前に有利区間を移行する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更後は少ないデジタル周期が選ばれやすい。
- 設定変更後の初回デジタル周期到達時はBC期待度が優遇され、朝一の早い初当たり期待が通常より高い。
- 111G消化後のBINGO揃いでロングリーチが連続する挙動は設定変更推測材料とする解析あり。

### resetPenalties
- 前日のゲーム数周期・デジタル周期・天井進行・有利区間を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更を正確に見抜くのは難しい。
- 111G消化後のBINGO揃い時にロングリーチが連続すれば設定変更期待が上がるが確定要素ではない。
- 有利区間ランプでは判別不可。
- 設定Lはデモ状態中に下パネル消灯するが、これは現在設定Lであることの判別であり、設定変更有無の判別とは別。
- 本機固有のリールガックン条件・発生率は再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常最大天井: **999G+α**。
- 設定変更専用デジタル周期の具体的振り分け率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- 設定変更専用初回デジ周期BC期待度の具体的設定別率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**（通常初回値とは混同しない）。

### publicMorningNumbers
- 固定短縮天井なし確認: 最大 **999G+α**。
- 公開された朝一専用固定％は今回確認できず、定性的に「少ないデジ周期・初回周期BC期待度優遇」を保存。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スーパービンゴネオクラシック / SスーパービンゴHH1 / ベルコ販売 / ベルコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / デジ周期 / モード / ガックン / 有利区間` を組み替えて探索。
- ベルコ公式、業界発表、公安委員会検定記事、P-WORLD、なな徹、パチマガスロマガ等を横断。
- 朝一専用の具体的周期振り分け率、朝一専用初回BC期待度、本機固有ガックン、独立した内部状態契約は固定できず、通常時数値から推測補完していない。

## sources
取得日: 2026-09-13

1. ベルコ公式 — 発売リリース
   - https://www.s-bellco.co.jp/news/202230602_01/
   - ベルコ販売製、6.5号機、純増約2.8枚/G、33G or Hooah!、継続率約75%。
   - confidence: OFFICIAL

2. 遊技日本 / P-WORLD — 販売発表
   - https://news.p-world.co.jp/articles/24678/nippon
   - 型式、設定別BC確率/出玉率、純増、8月7日導入予定、天井Hooah約1/2。
   - confidence: INDUSTRY

3. 遊技通信 / P-WORLD — 東京都公安委員会検定通過
   - https://news.p-world.co.jp/articles/24404/yugitsushin
   - SスーパービンゴHH1 / ベルコ販売 / 検定番号2S1848。
   - confidence: INDUSTRY

4. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/9860
   - 設定別BC/出玉率、約32.5G/50枚、999G天井、周期解析、設定変更/電源OFF ON挙動。
   - confidence: ANALYSIS_HIGH

5. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/589/16088/
   - 設定変更/据え置き周期・天井・有利区間、設定変更時周期優遇、有利区間ランプ。
   - confidence: ANALYSIS_HIGH

6. パチマガスロマガ — 朝イチ/設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/110/kr01-1.php
   - 設定変更/電源OFF ONの有利区間・天井・ゲーム数周期・デジ周期、111G後の判別材料。
   - confidence: ANALYSIS_HIGH

## missingFields
- 設定変更専用デジ周期の具体的振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用初回デジ周期BC期待度の具体的率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン: UNVERIFIED_AFTER_RESEARCH
- 独立した内部状態の設定変更/据え置き/純電断契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- なし（通常初回デジ周期数値と設定変更専用優遇値を混同せず分離）。

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
