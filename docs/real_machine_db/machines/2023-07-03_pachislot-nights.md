# パチスロナイツ

recordNo: 1573
machineName: パチスロナイツ
manufacturer: 山佐ネクスト
formalModel: SナイツYTCC
inspectionCode: 2S1313
releaseDate: 2023-07-03
generation: 6.5号機 / メダル機
systemType: AT / 擬似ノーマル / 擬似ボーナス / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
### 市場想定
- 設定1: 98.9%
- 設定2: 100.0%
- 設定3: 101.6%
- 設定4: 104.0%
- 設定5: 107.0%
- 設定6: 110.5%
### 完全攻略
- 設定1: 100.5%
- 設定2: 101.6%
- 設定3: 103.2%
- 設定4: 105.6%
- 設定5: 108.6%
- 設定6: 112.1%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ハイパーBB
- 設定1: 1/296.4
- 設定2: 1/290.4
- 設定3: 1/279.7
- 設定4: 1/264.9
- 設定5: 1/248.7
- 設定6: 1/231.7
### チャレンジBB
- 設定1: 1/409.8
- 設定2: 1/391.0
- 設定3: 1/375.3
- 設定4: 1/360.3
- 設定5: 1/353.4
- 設定6: 1/355.5
### ボーナス合算
- 設定1: 1/172.0
- 設定2: 1/167.1
- 設定3: 1/161.0
- 設定4: 1/153.4
- 設定5: 1/146.6
- 設定6: 1/140.3
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.7G/50枚（全設定共通の解析値）。
信頼度: ANALYSIS_HIGH

## netIncrease
- ハイパーBB中: 約8.7枚/G（擬似ボーナス中の増加性能）。
- 本機は擬似ノーマル機であり、通常AT機の継続AT純増とは定義を分けて扱う。
信頼度: ANALYSIS_HIGH

## basicPayout
- ハイパーBB: 平均約350枚。
- チャレンジBB: 平均約151枚。
- ボーナスはATによる擬似ボーナス。ハイパーBBは3択を完全ナビ、チャレンジBBは自力3択＋2コマ目押しの技術介入要素あり。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- ハイパーゾーン: スイカ成立後・ボーナス終了後に移行し、滞在中のボーナスはハイパーBB確定。
- 1000G到達そのものによるボーナス当選天井ではない。通常時1000G消化以降に成立した次回ボーナスがハイパーBB確定となる救済仕様。
- リーチ目役によるボーナス当選が基本で、通常のゲーム数当選型ATとは異なる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時の本機固有挙動は、正式型式 `SナイツYTCC`、メーカー、シリーズ名と「設定変更 / リセット / 朝一 / 据え置き / 天井 / ハイパーゾーン / ガックン / 有利区間」を組み替えて再探索したが、直接固定できる公開資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更で1000G救済カウンタ、ハイパーゾーン、成立済みボーナス/内部状態がどのように扱われるかは一般論で補完しない。

### carryOverBehavior
- 据え置き時の1000G救済カウンタ、ハイパーゾーン、内部状態の本機固有引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の1000G救済カウンタ、ハイパーゾーン、内部状態の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと同一と推定しない。

### gameCounterReset
- 通常時1000G消化以降は「次回ボーナスがHBB」となる救済仕様が存在。
- 設定変更 / 据え置き / 純電断ごとの当該ゲーム数カウンタのRESET/CARRY_OVERは `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常時1000G消化後の次回ボーナスはハイパーBB確定。
- これはボーナス強制当選天井ではなく、次回ボーナス種別の救済条件。
- 設定変更時の専用短縮値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 一般的なゲーム数モードは確認されない。
- 設定変更時のハイパーゾーン開始、朝一専用モード、専用振り分けは `NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- ハイパーゾーン等の内部状態について、設定変更 / 据え置き / 純電断別の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 6.5号機AT機だが、本機の設定変更 / 据え置き / 純電断別の有利区間挙動を直接示す公開資料は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 解析ページの有利区間欄も「調査中」であり、法規一般論から補完しない。

### resetBenefits
- 設定変更専用の短縮天井、朝一ハイパーゾーン優遇、ボーナス種別優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常仕様として1000G以降の次回ボーナスHBB確定があるが、リセット専用恩恵ではない。

### resetPenalties
- 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、表示、ランプ等による変更判別は、十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 朝一解析資料では設定変更 / 電源OFF→ONの天井・内部状態・ステージがいずれも「調査中」とされている。

### numericResetData
- 設定変更専用の公開朝一数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常仕様の救済値: **1000G消化以降の次回ボーナスはHBB確定**（リセット専用ではない）。

### publicMorningNumbers
- 朝一専用の公開固定数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロナイツ / ナイツ / SナイツYTCC / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1000G / ハイパーゾーン / モード / ガックン / 有利区間` を組み替えて検索。
- 公安委員会検定記事、メーカー系発表、業界記事、P-WORLD、HAZUSE、一撃、パチマガスロマガ、ちょんぼりすた、K-Navi、パチビー、後年回顧資料を横断。
- 朝一解析で設定変更/電源OFF→ON欄が調査中のまま残ることを確認。直接資料がない項目は一般論で埋めずUNVERIFIEDとした。

## sources
取得日: 2026-09-13
- 遊技通信 東京都公安委員会検定通過（SナイツYTCC / 2S1313）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%885%E6%9C%8815%E6%97%A5%EF%BC%89/
- 遊技日本 / P-WORLD 業界ニュース（型式・導入・ゲーム性）: https://news.p-world.co.jp/articles/24679/nippon
- 遊技通信 / P-WORLD 業界ニュース（A350・ツインBB・平均獲得）: https://news.p-world.co.jp/articles/24663/yugitsushin
- パチビー（機械割・完全攻略・ボーナス確率・平均獲得・1000G救済）: https://www.pachibee.jp/machines/index/223060000
- パチマガスロマガ（設定別HBB/チャレンジBB/合算・市場想定/完全攻略機械割）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/12/kh02.php
- 一撃（50枚あたり32.7G）: https://1geki.jp/slot/s_pachisuro_nights/5/
- HAZUSE（型式・検定番号・機械割・1000G以降HBB）: https://hazuse.com/machine/pachislot/2S1313/
- ちょんぼりすた（朝一リセット/電源OFF→ON欄・有利区間欄が調査中）: https://chonborista.com/slot/yamasa-slot/188783/
- 必勝本（通常時システム / ハイパーゾーン）: https://p.hisshobon.jp/vpage/2553/4

## missingFields
- 設定変更時の1000G救済カウンタ/ハイパーゾーン/内部状態: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の1000G救済カウンタ/ハイパーゾーン/内部状態: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の1000G救済カウンタ/ハイパーゾーン/内部状態: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断別の有利区間直接記述: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン/変更判別: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- ボーナス合算の設定2は資料に `1/167.1` と `1/167.2` の丸め差がある。業界記事・パチビー・必勝本など複数が1/167.1、後年DBに1/167.2表記があるため、canonicalは1/167.1とし丸め差として保持。
- 主要性能コアに重大CONFLICTなし。

coreStatus: COMPLETE_CORE
status: COMPLETE_CORE_RESET_V07_PARTIAL_RESEARCH_EXHAUSTED
