# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点は268件地点 `コリアンドラムS2-30（2008-07月精度）` まで完了。
- 2008年7月中旬境界を再監査し、ヤーマ `スーパージャックポットN` が未登録で、当時業界一次資料に **2008-07-13納品開始予定** と具体日があることを確認。
- 269件目として `スーパージャックポットN` を追加。性能コア + v0.7 resetBehaviorを同時収集済み。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回も新規収集を優先。

## 269. スーパージャックポットN

- record: `docs/real_machine_db/machines/2008-07-13_super-jackpot-n.md`
- commit: `fee27384aa7a4c098046a076f731bcd3454582e2`
- releaseDate: `2008-07-13`
- releaseDatePrecision: `INDUSTRY_DELIVERY_START_DATE`
- manufacturer: ヤーマ
- modelName: `スーパージャックポットN`
- systemType: ノーマル + 天井RT / 完全告知
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `COMPLETE_FOR_PUBLICLY_CONFIRMABLE_RESET_SCOPE_WITH_DEVICE_SPECIFIC_BEHAVIOR_UNVERIFIED`

### 性能コア

- BIG: `1/292.57 → 1/256.00`
- REG: `1/399.61 → 1/315.08`
- 合成（精密BIG/REGから算出）: 約 `1/168.91 → 1/141.24`
- 当時業界記事の合成レンジ: `1/168 → 1/141`
- 1000円ベース: 約 `34〜36G`
- BIG純増: 約 `312枚`
- REG/CHALLENGE BONUS純増: 約 `104枚`
- ボーナス終了後600G消化で、次回ボーナスまで天井RT。RT純増は現状維持程度。

### 機械割CONFLICT

- 当時グリーンべると / P-WORLD / 5号機クロニクル: `97.0 / 98.5 / 101.0 / 103.5 / 106.0 / 108.0%`
- pacnk後年解析: `98.71 / 101.01 / 103.51 / 104.80 / 106.06 / 107.15%`
- 差が大きく、算出条件/定義差の可能性はあるが断定せず `CONFLICT_PAYOUT_DEFINITION_OR_SOURCE`。平均化禁止。

## v0.7 resetBehavior（269）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`
- `gameCounterReset`: 600G天井の存在は確定。ただし設定変更/据え置き/電断時のカウンタ処理は `UNVERIFIED_AFTER_RESEARCH`。
- `ceilingAfterReset`: 設定変更後のみの短縮/変更天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: 公開モード/朝一専用モードは `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- `stateAfterReset`: 天井RT中の設定変更/据え置き/電断時残状態は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits / resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: ガックン/初期出目/表示/600G挙動等による本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機や他ヤーマ機の挙動は流用していない。

## 今回の主要出典

取得日: 2026-09-01

- https://web-greenbelt.jp/00006484/
- https://www.p-world.co.jp/machine/database/5192
- https://pacnk.com/slot/tools/sh_supajakkupotto2008.html
- https://5goki.com/yama
- https://www.a-slot.com/SHOP/yama1.html
- https://plaza.rakuten.co.jp/mosnet/diaryall/
- https://web-greenbelt.jp/00003699/

## 重複防止

- 既存269件の再追加禁止。
- `スーパージャックポット / スーパージャックポットN` は今回269の2008年ヤーマ機として同一系列扱い。2015年アクロス `スーパージャックポット` と混同禁止。
- `コリアンドラム30 / コリアンドラム-30` は267と同一。
- `コリアンドラムS2-30 / コリアンドラムS2‐30` は268と同一。
- `スーパールーレット / スーパールーレット30` はネイチャー・アセスメント。2008-06-05業界記事で「洞爺湖サミット明けの7月納品予定」まで確認済み。25Φ/30Φ別スペックの可能性があるため相互転記禁止。
- `花浪漫N-30` はタイヨー。2008-06-24発表、2008-07-19時点で情報提供端子板対応機種に列挙。具体納品日をさらに詰める。
- `花浪漫R-30` は沖縄限定別スペックで、2008年7月下旬導入と2008-08-08業界記事に記録。N-30と混同禁止。
- `爺サマー` は大都技研。一次資料で2008年7月下旬市場投入予定。
- `海人 / 海人G-30` はトリビー。旧業界史で2008-08-04発売へ更新されているため、7月候補から先行登録しない。

## resetBehavior 遡及QA

- 次対象: **`ジャックポット・トロピカルバージョン2（2006-09）` 以降**。
- resetBehavior節が既にある機種は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準269件地点。`スーパージャックポットN（2008-07-13納品開始）` まで追加済み。**
2. 次は2008年7月残未処理の `花浪漫N-30` と `スーパールーレット / スーパールーレット30` を最優先で再監査し、具体納品日/導入日を詰める。
3. `花浪漫N-30` は2008-06-24発表、7/19時点で端子板対応機種に列挙。`花浪漫R-30` は沖縄限定別スペックで7月下旬導入なので混同しない。
4. `スーパールーレット` は2008-06-05業界記事で「洞爺湖サミット明けの7月納品予定」。25Φと30Φの性能差があるため別レコード要否を確認してから登録する。
5. 上記の具体日が取れない場合は月精度で漏れ防止登録を検討し、その後、一次資料で7月下旬市場投入予定が取れている `爺サマー` へ進む。
6. `海人 / 海人G-30` は2008-08-04発売資料があるため7月列には混入させない。
7. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
8. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
