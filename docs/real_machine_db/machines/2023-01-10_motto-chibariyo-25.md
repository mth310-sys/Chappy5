# もっと！チバリヨ-25

recordNo: 1545
machineName: もっと！チバリヨ-25
manufacturer: オーゼキ製造 / ネット販売
formalModel: SもっとチバリヨGZA
inspectionCode: 230114
releaseDate: 2023-01-10
generation: 6.4号機 / 25Φメダル機
systemType: AT / 擬似ボーナス連チャンタイプ

## payoutRateBySetting
- 設定1: 97.9%
- 設定2: 99.4%
- 設定3: 101.3%
- 設定4: 103.2%
- 設定5: 105.3%
- 設定6: 107.6%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当たり
- 設定1: 1/255
- 設定2: 1/252
- 設定3: 1/237
- 設定4: 1/224
- 設定5: 1/211
- 設定6: 1/202

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.7G/50枚（設定1〜6共通）。

信頼度: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナスAT純増: 約3.0枚/G。

信頼度: ANALYSIS_HIGH

## basicPayout
- BIG: 70G、約210枚。
- REG: 30G、約90枚。
- 天国モード: 80%over、平均5.1連。
- 超天国モード: 85%over、平均6.7連。
- パトランプモード: 92%、平均12.5連。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 2022-12導入「もっと！チバリヨ-30」の25π版としてネットが正式発表。
- 通常モードは通常A / 通常B / 天国チャンスA / 天国チャンスB / パトランプ準備の5系統。
- 連チャン系は天国 / 超天国 / パトランプの3系統。
- ゲーム数天井は有利区間移行後最大900G+αでボーナス。
- チェリー規定回数天井はボーナス間最大40回。
- 同一有利区間内では3回目のボーナス当選で天国モードへ移行。
- 有利区間リセット時は53%で天国チャンスモード以上へ移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更では有利区間をRESETし、有利区間移行後のゲーム数天井・チェリー規定回数進行・内部モードを新たに開始する契約として整理。
- 25Φ固有解析で、有利区間リセット時53%で天国チャンスモード以上へ移行することを確認。

### carryOverBehavior
- 据え置き時は有利区間を継続し、ゲーム数/チェリー規定回数の天井進行と内部モードをCARRY_OVERする契約として整理。
- 有利区間継続の有無は外見で確認できない。

### powerCycleBehavior
- 純電源OFF→ONのみについて、25Φ型式 `SもっとチバリヨGZA` を明記した直接資料は、機種名・型式・オーゼキ/ネット・25Φと `電源OFF ON / 電断 / 据え置き / リセット / 天井 / モード / 有利区間` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 30Φ版・径非限定ページの電断契約を25Φへ自動転記しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH（25Φ型式固有の直接資料）。
- 通常時最大900G+α / チェリー最大40回。

### ceilingAfterReset
- 設定変更では既存天井進行をRESET。
- 有利区間リセット後も公開されている最大天井は900G+α、チェリー最大40回。
- 設定変更専用のゲーム数天井短縮値は資料系統を変えて再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更 / 有利区間リセット後: RESET / 再抽選。
- 有利区間リセット時は53%で天国チャンスモード以上。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 25Φ型式固有直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- 53%の内訳（天国チャンスA/B・パトランプ準備個別振り分け）は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 朝一客AIに必要な主要内部状態はモード管理として記録。
- モードと独立した設定変更専用状態の公開振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 25Φ型式固有直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- 本機は有利区間ランプ非搭載で、ランプによるリセット判別不可。

### resetBenefits
- 有利区間リセット時は53%で天国チャンスモード以上へ移行。
- 天国チャンス系は初当たり後の連チャンモード移行期待が高いため、朝一リセット狙いの主要な比較可能恩恵。
- それ以外の設定変更専用天井短縮・確定ボーナス等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更により前日の天井進行・チェリー回数進行・内部モードを失う。
- 前日モード/深い天井進行を据え置く価値がある状況では実質的不利になり得る。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプでは判別不可。
- 有利区間継続の有無も見た目では確認できないと25Φ固有解析が明記。
- 朝一の初当たり・天国移行の分布は店舗単位の推測材料にはなるが単独確定材料ではない。
- 本機固有リールガックン条件/発生率は `もっと！チバリヨ-25 / SもっとチバリヨGZA / オーゼキ / ネット / 25Φ` と `ガックン / リール / 設定変更 / リセット判別 / 朝一` を組み替え、攻略・旧DB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 有利区間リセット時、天国チャンスモード以上: 53%。
- 通常時ゲーム数天井: 最大900G+α。
- チェリー規定回数天井: 最大40回。
- 同一有利区間内: 3回目ボーナスで天国モード移行。
- 天国: 80%over / 平均5.1連。
- 超天国: 85%over / 平均6.7連。
- パトランプ: 92% / 平均12.5連。

### publicMorningNumbers
- 有利区間リセット時、天国チャンスモード以上: 53%。
- 個別モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更専用の特定G以内当選率 / 天井短縮率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `もっと！チバリヨ-25 / もっとチバリヨ25 / SもっとチバリヨGZA / オーゼキ / ネット / 25Φ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / チェリー天井 / モード / 有利区間 / ガックン` を組み替えて検索。
- 1geki 25Φ固有ページ、P-WORLD 25Φ固有DB、パチ7 25Φ固有解析、ネット発表を報じる業界資料、検定通過資料を横断。
- 径非限定の「もっと！チバリヨ」電源OFF→ON解析は参考確認したが、25Φ型式固有で直接固定できないためpowerCycleへは転記していない。

## conflicts
- メーカー表記は市場DBで「NET / ネット」が一般的だが、検定通過はオーゼキ名義。販売ブランドと製造名義を分け `オーゼキ製造 / ネット販売` とする。
- 25Φは2022-12の30Φ版をベースとするが、正式型式・検定番号・導入日が別なので独立レコード。
- 有利区間リセット恩恵は「50%以上 / 50%over」とする資料と、後年25Φ固有解析の「53%」がある。方向性は整合しており、詳細値53%をcanonical、50%以上は丸め表現として保持。

## sources
取得日: 2026-09-13

- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10003159/
  - ネット発表、25Φ版発売、通常/天国モード概要、2023年1月導入予定。
- ネット発表配信（DreamNews転載）: https://www.mapion.co.jp/news/release/dn0000270356-all/
  - 2022-12導入「もっと！チバリヨ-30」の25π版、2023年1月全国導入予定。
- 1geki もっと！チバリヨ-25: https://1geki.jp/slot/s_mtchibariyo25/
  - 2023-01-10、設定別初当たり/機械割、BIG/REG、モード概要。
- 1geki 小役/ベース: https://1geki.jp/slot/s_mtchibariyo25/4/
  - 約33.7G/50枚。
- 1geki 天井/設定変更: https://1geki.jp/slot/s_mtchibariyo25/3/
  - 最大900G+α、チェリー40回、同一有利区間3回目ボーナスで天国、有利区間ランプ非搭載。
- 1geki 通常時モード: https://1geki.jp/slot/s_mtchibariyo25/42/
  - 有利区間リセット時53%で天国チャンス以上、各天国ループ率/平均連。
- P-WORLD 25Φ機種DB: https://www.p-world.co.jp/machine/database/9759
  - 型式 `SもっとチバリヨGZA`、検定番号230114、オーゼキ/ネット、2023-01-10、スペック/モード/天井。
- パチ7 ボーナス解析: https://pachiseven.jp/machines/6757/cutout/8
  - オーゼキ/ネット、2023-01-10、純増約3.0枚/G、BIG70G約210枚、REG30G約90枚。
- すろぱちくえすと もっと！チバリヨ: https://www.slopachi-quest.com/article/motto-chibariyo-tenjou/
  - 径非限定の参考資料。設定変更/電源OFF→ON表、リセット時53%。25ΦpowerCycleのcanonical根拠には採用せず。
- ALL7 2023年1月新台一覧: https://www.all7.jp/plans/index/2023/01
  - もっと！チバリヨ-25を2023-01-10導入として掲載。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
confidence: INDUSTRY product identity / HIGH core / HIGH reset numeric / power-cycle and gackun UNVERIFIED_AFTER_RESEARCH