# HEY！エリートサラリーマン鏡

recordNo: 1537
machineName: HEY！エリートサラリーマン鏡
manufacturer: パオン・ディーピー（製造） / 大都技研グループ
formalModel: L HEY！エリートサラリーマン鏡PA4
inspectionCode: 2S0855
releaseDate: 2022-12-05
generation: 6.5号機 / スマートパチスロ初期 / コンプリート機能搭載
systemType: AT / 擬似ボーナス経由・ゲーム数管理型AT

## payoutRateBySetting
- 設定L: 公表値なし
- 設定1: 97.6%
- 設定2: 98.9%
- 設定4: 104.5%
- 設定5: 110.6%
- 設定6: 114.9%

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### 公開スペック上の初当たり合算
- 設定1: 1/273.1
- 設定2: 1/263.5
- 設定4: 1/229.8
- 設定5: 1/200.6
- 設定6: 1/189.6

- 設定Lの初当たり・機械割は公表値なし。
- 設定Lはデモ画面時に下パネル消灯とする解析が複数資料で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約34G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナス / AT「American Dream」: 約2.7枚/G。

信頼度: OFFICIAL_ANNOUNCEMENT / INDUSTRY / MULTI_SOURCE_MATCH

## basicPayout
- BONUS: 40G〜100G、純増約2.7枚/G。
- 赤7BONUS: AT期待度約31%。
- 青7BONUS: AT期待度約81%。
- BONUS 100G完走時は約1/3でフリーズ → 超PRESIDENT BONUS。
- AT「American Dream」: 初期50G+α、純増約2.7枚/G。
- 上位モード「エクスタシーモード」: 突入時の獲得期待枚数約3500枚。
- 「COME ON!!ループ」は最大90%ループ。
- CZ「Love Force One」: 10G+α、BONUS期待度約40%。

信頼度: OFFICIAL_ANNOUNCEMENT / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・レア役・CZ等からBONUSを目指し、BONUS中の抽選を経てATへ突入する王道型。
- 通常時モードは通常A / 通常B / 通常C / チャンス / 天国の5種。
- モード別天井は通常A 969G、通常B 969G、通常C 999G、チャンス269G、天国99G。
- 通常Bは通常Bループまたは天国への移行に期待できるモード。
- 通常CはAT当選時のエクスタシーモード突入が優遇される。
- 900G以降で当選したBONUSは60G以上継続濃厚/確定扱いの解析が複数系統で一致。
- BONUSからATへ5回連続で非当選の場合、6回目以降は青7BONUS比率が大幅アップする救済あり。
- ドリームカムズアゲイン後は成否を問わず次回規定ゲーム数が334G以内となる解析あり。これは設定変更専用短縮ではないためreset専用値と分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_ADVANTAGE_AND_SINGLE_SOURCE_EXACT_MODE_TABLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部モードRESET / 再抽選。
- 内部状態RESET。複数解析のうち明示資料では通常状態スタート。
- 設定変更後は約66%でチャンス or 天国モードへ移行する。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井までの内部ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 内部ゲーム数・規定ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 朝一の液晶ゲーム数表示は設定変更時・電源OFF→ON時とも0Gから始まるため、表示0Gだけでは変更判別できない。

### gameCounterReset
- 設定変更: 内部ゲーム数 / 天井進行RESET。
- 据え置き / 純電断: 内部ゲーム数 / 天井進行CARRY_OVER。
- 表示カウンタは設定変更・純電断とも朝一0G表示となる解析があるため、表示値と内部値を分離する。

### ceilingAfterReset
- 設定変更専用の固定一律天井ではなく、再抽選モードで天井が決まる。
- 通常A: 969G。
- 通常B: 969G。
- 通常C: 999G。
- チャンス: 269G。
- 天国: 99G。
- 設定変更後は約66%でチャンス or 天国となるため、結果として朝一の天井が269G以下となる割合が高い。
- ドリームカムズアゲイン後334G以内の短縮は設定変更専用ではないため別系統。

### modeAfterReset
- 設定変更時はモード再抽選。
- 高信頼の複数解析で「約66%でチャンス or 天国」が一致。
- 設定変更後にチャンス / 天国を否定した場合の通常A / B / C滞在割合は設定別に公開されている。
  - 設定1: 通常A 71.0% / 通常B 28.0% / 通常C 1.0%
  - 設定2: 通常A 71.0% / 通常B 28.0% / 通常C 1.0%
  - 設定4: 通常A 67.0% / 通常B 32.0% / 通常C 1.0%
  - 設定5: 通常A 64.0% / 通常B 35.0% / 通常C 1.0%
  - 設定6: 通常A 62.0% / 通常B 37.0% / 通常C 1.0%
- 単一解析資料では設定変更時の全モード振り分けを通常A25.0% / 通常B9.8% / 通常C0.4% / チャンス50.0% / 天国14.8%と掲載。合計チャンス+天国64.8%で、複数高信頼資料の「約66%」と近似するが、単一資料値のため `ANALYSIS_SINGLE_NOT_CANONICAL` として保持する。

### stateAfterReset
- 設定変更: 内部状態RESET。明示解析では通常状態。
- 据え置き / 純電断: CARRY_OVER。

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き / 純電断: CARRY_OVER。
- スマスロのため有利区間ゲーム数上限なし。
- 稼働中はエンディング到達時に有利区間RESET。
- ドリームカムズアゲイン突入時の一部でも有利区間RESET。差枚数マイナス時は基本的にリセットされないとする解析が複数系統で一致。

### resetBenefits
- 設定変更後は約66%でチャンス or 天国へ移行。
- チャンスは269G以内、天国は99G以内にBONUS当選するため朝一の早当たり期待が高い。
- 公開解析では設定変更後300G以内のBONUS初当たり期待度約65%。
- チャンス / 天国否定後は通常B選択率に設定差があり、高設定ほど通常Bが選ばれやすい。

### resetPenalties
- 前日の内部ゲーム数、規定ゲーム数、モード、内部状態を失う。
- 前日の深いハマりや有利な内部モードを引き継げないことが主な機会損失。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一ゲーム数表示は設定変更時・純電断時とも0Gのため、表示0Gだけでは判別不可。
- 純電断/据え置きでは内部モード・規定ゲーム数・消化ゲーム数を引き継ぎ、前兆も内部ゲーム数基準で発生する。
- そのため朝一に本来のゾーン外で前兆が発生した場合は据え置き可能性UP、ゾーンどおりなら設定変更可能性UPという補助判別が可能。
- 設定変更後の99G以内当選や269G以内当選はチャンス/天国期待を上げるが単独の確定判別材料ではない。
- 本機固有のリールガックン条件/発生率は `HEY！エリートサラリーマン鏡 / L HEY！エリートサラリーマン鏡PA4 / スマスロ鏡 / パオン・ディーピー / 大都 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` を組み替え、業界記事・当時解析・攻略DB・回顧資料まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後チャンス or 天国: 約66%（複数解析一致）。
- 設定変更後300G以内BONUS初当たり期待度: 約65%。
- チャンス天井: 269G。
- 天国天井: 99G。
- 通常A / B天井: 969G。
- 通常C天井: 999G。
- チャンス / 天国否定後 通常B割合: 設定1・2 28.0% / 設定4 32.0% / 設定5 35.0% / 設定6 37.0%。
- 単一資料の設定変更時全モード候補値: 通常A25.0% / 通常B9.8% / 通常C0.4% / チャンス50.0% / 天国14.8%（ANALYSIS_SINGLE_NOT_CANONICAL）。

### publicMorningNumbers
- 朝一設定変更後チャンス or 天国: 約66%。
- 朝一設定変更後300G以内BONUS初当たり期待度: 約65%。
- チャンスモード天井: 269G。
- 天国モード天井: 99G。
- チャンス / 天国否定後の通常B割合: 設定1・2 28.0% / 4 32.0% / 5 35.0% / 6 37.0%。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `HEY！エリートサラリーマン鏡 / HEY!エリートサラリーマン鏡 / スマスロ鏡 / L HEY！エリートサラリーマン鏡PA4 / パオン・ディーピー / 大都技研` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / 状態 / ガックン / 有利区間 / 判別` を組み替えて再探索。
- 遊技通信、遊技日本、グリーンべると、Amusement Japan、P-WORLD、HAZUSE、1geki、なな徹、必勝本、当時解析・後年解析を横断。
- 型式 `L HEY！エリートサラリーマン鏡PA4` は業界発表・複数DBで一致。検定番号 `2S0855` はHAZUSE等の機種DBで確認。
- 約66%のチャンス/天国移行、チャンス/天国否定後のA/B/C比率、朝一表示0Gと内部引継ぎ判別は複数解析で整合。
- ガックンは十分な再探索後も直接固定できなかったためUNVERIFIED。

## conflicts
- 設定変更時のモード振り分けについて、高信頼複数資料は「チャンス or 天国 約66%」とする一方、単一解析資料は通常A25.0% / 通常B9.8% / 通常C0.4% / チャンス50.0% / 天国14.8%（チャンス+天国64.8%）とする。近似差であり「約66%」との明確な実質矛盾までは断定せず、exact値を `ANALYSIS_SINGLE_NOT_CANONICAL` として分離保持。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定Lの初当たり・機械割: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の全モード振り分け exact canonical table: UNVERIFIED_AS_MULTI_SOURCE_EXACT / approximate 66% canonical

## sources
取得日: 2026-09-13

1. 遊技通信 — 大都技研スマスロ第一弾！エリートサラリーマン鏡がスマートに頂く！
   https://news.p-world.co.jp/articles/21919/yugitsushin
2. 遊技日本 — 鏡がスマスロに！「HEY!エリートサラリーマン鏡」
   https://news.p-world.co.jp/articles/21899/nippon
3. 遊技日本 — 12/5新台導入 HEY!エリートサラリーマン鏡
   https://news.p-world.co.jp/articles/22406/nippon
4. グリーンべると — 12/5新台 スマスロ『HEY！エリートサラリーマン鏡』
   https://news.p-world.co.jp/articles/22405/greenbelt
5. Amusement Japan — 大都技研スマスロ第一弾は番長シリーズの“鏡”
   https://amusement-japan.co.jp/article/detail/10003084/
6. P-WORLD — HEY!エリートサラリーマン鏡
   https://opt.p-world.co.jp/machine/database/9733
7. HAZUSE — HEY！エリートサラリーマン鏡 基本スペック
   https://hazuse.com/machine/pachislot/2S0855/genre/201/
8. HAZUSE — HEY！エリートサラリーマン鏡 機種トップ
   https://hazuse.com/machine/pachislot/2S0855/
9. HAZUSE — HEY！エリートサラリーマン鏡 初打講座
   https://hazuse.com/machine/pachislot/2S0855/genre/203/
10. 1geki — 鏡（スマスロ）天井と朝一（リセット）恩恵
    https://1geki.jp/slot/s_hey_eskagami/3/
11. なな徹 — 朝一・設定変更時の挙動 / 有利区間
    https://nana-press.com/kaiseki/machine/465/12695/
12. なな徹 — モードの種類・特徴・移行抽選
    https://nana-press.com/kaiseki/machine/465/12697/
13. パチ＆スロ必勝本 — 設定変更判別について
    https://p.hisshobon.jp/machine/4005/1/92808
14. パチ＆スロ必勝本 — モードについて
    https://p.hisshobon.jp/machine/4005/1/92369
15. スロットセブン — 天井・朝一解析まとめ
    https://slot-seven.com/eskagami-tenzyou/
16. スロット解析.com — 設定変更後の全モード振り分け候補（単一資料）
    https://slotkaiseki.com/l_heykagami_mode_tenjou/
17. ちょんぼりすた — Lエリートサラリーマン鏡 解析
    https://chonborista.com/slot/daito-slot/175043/

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_ADVANTAGE_AND_UNVERIFIED_GACKUN
- confidence: HIGH for core / HIGH for reset core / ANALYSIS_SINGLE for exact five-mode reset table
