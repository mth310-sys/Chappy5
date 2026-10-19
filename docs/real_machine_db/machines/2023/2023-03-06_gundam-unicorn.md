# パチスロ機動戦士ガンダムユニコーン

recordNo: 1552
machineName: パチスロ機動戦士ガンダムユニコーン
manufacturer: ビスティ / SANKYO
formalModel: S機動戦士ガンダムユニコーンsF
inspectionCode: 2S1613
releaseDate: 2023-03-06
generation: 6.5号機 / メダル機
systemType: AT / セット継続・ゲーム数上乗せ型
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定L: 公開比較可能値 `UNVERIFIED_AFTER_RESEARCH`
- 設定1: 97.7%
- 設定2: 99.3%
- 設定4: 104.4%
- 設定5: 107.3%
- 設定6: 108.1%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「ユニコーンRUSH」
- 設定L: 公開比較可能値 `UNVERIFIED_AFTER_RESEARCH`
- 設定1: 1/344
- 設定2: 1/326
- 設定4: 1/273
- 設定5: 1/248
- 設定6: 1/240

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.5G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「ユニコーンRUSH」: 約2.4枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT「ユニコーンRUSH」は初回50G+α、2セット目以降30G+α。
- セット継続とゲーム数上乗せで出玉を伸ばすAT。
- AT終了後はCZ「可能性の獣」を経由し、成功時はATへ復帰。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時最大999G消化でAT「ユニコーンRUSH」またはミネバモード。
- 通常時モードは通常 / 引き戻し / 天国 / ミネバ。
- 引き戻しモードは222G以降の強レア役がAT当選の大チャンス。
- 天国モードは強レア役によるAT当選が大幅優遇。
- ミネバモードは999G到達時の一部で発動し、100〜300G間ミネバチャンスのストック抽選。
- 設定Lを含む6段階設定。設定Lは遊技中の下パネル高速点滅で判別可能。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までのゲーム数RESET。
- 内部状態RESET。
- 通常時モードを再抽選。
- 開始ステージは実戦上インダストリアル7。
- 液晶ゲーム数は0G表示。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井までのゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 通常時モードCARRY_OVER。
- 朝一はインダストリアル7、液晶0G表示となるため表示だけでは設定変更と区別できない。

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 通常時モードCARRY_OVER。
- 純電断時の有利区間そのものを明示した本機固有の直接対比資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。天井・状態・モードについてはパチ＆スロ必勝本の設定変更/電源OFF-ON比較表で直接確認。
- 電源OFF→ON時の開始ステージは高信頼資料で「調査中」が残るため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 液晶上は設定変更/据え置きとも朝一0G表示のため、内部天井進行と表示G数を分離して扱う。

### ceilingAfterReset
- 通常天井は999G。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後はモード再抽選が優遇されるため早いAT当選に期待できるが、999G天井そのものの短縮とは区別する。

### modeAfterReset
- 設定変更時はモード再抽選。
- 全設定共通で天国モードへ約30%、引き戻しモードへ約20%。
- 天国+引き戻し合算は約50%。
- 残余は通常系を中心とするが、設定変更時の全モード完全振り分けを100%表にした高信頼公開値は今回固定できなかったため、公開確認できた約30%/約20%だけをcanonicalとして保持。
- 据え置き/純電源OFF→ONはモードCARRY_OVER。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更後の通常/高確/超高確など内部状態の具体初期振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 本機固有の直接対比資料を十分に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる設定変更/据え置き判別は不可。

### resetBenefits
- 設定変更後は全設定共通で約30%が天国、約20%が引き戻しとなり、合算約50%で有利モードへ移行。
- 固定天井短縮ではなくモード優遇型の朝一恩恵。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・モードを失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更/据え置きともインダストリアル7開始、液晶0G表示のため見た目での直接判別は困難。
- 有利区間ランプによる判別不可。
- 前日ゲーム数を加味して999G未満で天井恩恵が発動した場合は据え置き濃厚材料。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー・朝一・設定変更・据え置き・ガックンを組み替えて再探索しても `UNVERIFIED_AFTER_RESEARCH`。
- 設定Lは遊技中の下パネル高速点滅で判別可能だが、これは設定変更判別ではなく設定L判別。

### numericResetData
- 設定変更時天国モード: 約30%（全設定共通）。
- 設定変更時引き戻しモード: 約20%（全設定共通）。
- 天国+引き戻し: 約50%。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井: 999G。

### publicMorningNumbers
- 朝一設定変更時、天国約30% / 引き戻し約20% / 合算約50%を公開確認。
- 設定変更後の特定ゲーム数以内AT当選率は、条件を揃えた高信頼公開値を十分に固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ機動戦士ガンダムユニコーン / ガンダムUC / S機動戦士ガンダムユニコーンsF / ビスティ / SANKYO / 2S1613` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / 有利区間 / ガックン / 判別` を組み替えて検索。
- 遊技通信、遊技日本、グリーンべると、G-net検定切れ情報、パチ＆スロ必勝本、なな徹、一撃、スロパチクエスト、P-WORLDを横断。

## conflicts
- メーカー表記は業界発表で「ビスティ製」とする資料と、検定通過/型式資料で「SANKYO」とする資料が併存。販売ブランド/製造元表記差として `manufacturer: ビスティ / SANKYO` に分離保持し、数値競合とは扱わない。
- 一部後年集約資料が存在しない「設定3」欄を便宜上表示するが、当時高信頼解析は設定L / 1 / 2 / 4 / 5 / 6構成で、設定3の公表性能値は採用しない。

## sources
取得日: 2026-09-13

- 遊技通信 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/23010/yugitsushin
  - 型式S機動戦士ガンダムユニコーンsF、SANKYO製、2023年3月上旬導入、ATゲーム性。
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/23136/nippon
  - ビスティ製、型式、設定1/2/4/5/6のAT確率・出玉率、販売発表。
- グリーンべると検定通過: https://news.p-world.co.jp/articles/22795/greenbelt
  - S機動戦士ガンダムユニコーンsF / SANKYOの検定通過。
- G-net 大阪府公安委員会検定切れ情報: https://g-net-ps.com/content/%E3%81%B1%E3%81%A1%E3%82%93%E3%81%93%E3%83%BB%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%A4%9C%E5%AE%9A%E5%88%87%E3%82%8C%E6%83%85%E5%A0%B1%EF%BC%882026%E5%B9%B41%E6%9C%88%EF%BC%89/
  - 型式S機動戦士ガンダムユニコーンsF、検定番号2S1613。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2524/2
  - 2023-03-06、ビスティ、AT純増約2.4枚/G、32.5G/50枚、AT基本G数。
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4066/1/93625
  - 999G天井、設定変更/電源OFF-ONの天井・状態・モード対比。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/518/13902/
  - 設定変更/据え置きの有利区間・天井・状態・モード・ステージ、天国約30%/引き戻し約20%、液晶0G、変更判別、有利区間ランプ。
- なな徹 AT確率/機械割: https://nana-press.com/kaiseki/machine/518/13659/
  - 設定別AT確率・機械割、32.5G/50枚、設定Lと下パネル高速点滅。
- 一撃 天井・朝一: https://1geki.jp/slot/s_gundam_uc/3/
  - 999G天井、設定変更時の天国約30%/引き戻し約20%。
- スロパチクエスト 天井解析: https://www.slopachi-quest.com/article/gundamyuniko-nn-tenjou/
  - 999G+α天井、32.5G/50枚、設定変更時モード。
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9799
  - 通常/高確/超高確など通常時状態の補助確認。

## missingFields
- 設定Lの比較可能な機械割・AT初当たり: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の有利区間そのものの直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の開始ステージ: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部状態具体振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一特定G以内AT当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

coreStatus: COMPLETE_CORE
