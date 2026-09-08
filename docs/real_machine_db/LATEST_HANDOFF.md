更新日: 2026-09-08

## 現在地点
- recordCount: **985**
- latestRecordAdded: **ドリームハナハナ-30**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-06-06_dream-hanahana-30.md`
- chronologicalFrontier: **2016-06-06**
- frontierLatestMachine: **ドリームハナハナ-30**
- schema: **resetBehavior v0.7**
- status: **2016-06-06_GROUP_OPEN_FINAL_AUDIT_REQUIRED**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.984 `2016-06-06_big-dream-in-lost-island2.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount **984** / chronologicalFrontier **2016-06-06** / `2016-06-06_GROUP_OPEN_AUDIT_REQUIRED`。
- 06/06群をALL7、パチビー、メーカー/業界資料で再監査し、未処理の **ドリームハナハナ-30** を発見。GitHub重複検索で既存レコードなしを確認後、No.985として追加。

## 2016-06-06群 — 現在の登録済み
- No.984 **パチスロ ビッグドリーム in ロストアイランド2**（タイヨーエレック）
- No.985 **ドリームハナハナ-30**（パイオニア）

## No.985 — ドリームハナハナ-30
- manufacturer: **パイオニア**
- releaseDate canonical: **2016-06-06**
- formalModelName: **ドリームハナハナ/DX-30**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマル / Aタイプ / 完全告知 / 30φ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### release-date audit
- パチビー: **2016-06-06導入**。
- ALL7 2016年6月一覧: **2016-06-06導入予定**。
- グリーンべると2016-05-11記事: **6月中旬納品予定**。
- ちょんぼりすた: **2016-06-20導入**。
- K-Navi: **2016-06-27ホール導入開始**。
- 平成28年6月稼働開始はドラス/サミーネット系後年資料でも確認。
- 本DBは最も早い実導入日明示を時系列canonicalとして **2016-06-06**、差を `CONFLICT_RELEASE_DATE_2016_06_06_VS_2016_06_20_VS_2016_06_27` として保持。平均しない。

### performanceCore
- 機械割: **96.0 / 98.0 / 101.0 / 104.0 / 107.0 / 111.0%**。
- BIG: **1/318 / 306 / 293 / 277 / 262 / 246**。
- REG canonical: **1/528 / 492 / 458 / 420 / 385 / 352**。
- 合算 canonical: **1/198 / 188 / 179 / 167 / 156 / 145**。
- 設定5のみ、ちょんぼりすた/すろぱちくえすとに **REG 1/395 / 合算1/158** が残るため `CONFLICT_SETTING5_REG_1_385_VS_1_395_AND_COMBINED_1_156_VS_1_158`。平均しない。
- 50枚ベース: **約38.5G**。
- BIG: **最大312枚** / REG: **最大130枚**。
- 天井: **非搭載**。

### resetBehavior v0.7
- 設定変更: 天井/通常時モードは非搭載でN/A。**設定変更後最初のBIG終了時のみ専用パネルフラッシュ抽選**。
- 公開朝一数値: 初回BIG後、**上のみ37.5% / 上下12.5% / 合計50.0%**、全設定共通。
- 据え置き: 天井/通常時モードはN/A。設定変更専用初回BIGフラッシュ条件には該当しない。
- 純電源OFF→ON: 本機固有の直接比較資料を、型式名/電源OFF ON/据え置き/朝一/ガックン等へ検索語を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更と純電断を同義扱いしない。
- 変更判別: 設定変更後1G目の**リールガックン**が補助指標。ただしハナハナは判別が難しく個体差・1G回し対策があるため確定扱いしない。
- 初回BIG後パネルフラッシュ50%も変更推測材料だが、通常BIG後にもフラッシュは発生し得るため確定ではない。
- BETランプはクイーンハナハナ以降のシリーズで変更判別に使えないとの解析整理あり。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一出玉面の固定恩恵/不利: 天井短縮・高確移行等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### quality / missing
- 型式 `ドリームハナハナ/DX-30` は検定通過記事・中古実機資料等で複数確認。
- certificationNumberは十分再探索しても直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehaviorは本機固有直接比較がなく **UNVERIFIED_AFTER_RESEARCH**。
- releaseDateと設定5REG/合算競合は原値を双方保持。

## 2016-06-06群 — 継続事項
- No.984 Big Dream、No.985 Dream Hanahana-30を登録済み。
- コードギアスR2は5/30 canonicalでNo.978登録済み。6/6表記資料があっても重複登録しない。
- サミー公式製品年表のA-SLOT北斗の拳 将 / A-SLOT偽物語の `2016/06/06` 表記は、後年導入DBの7/4実導入と定義差があるため06/06群へ即登録しない。7/4群で再監査。
- **ぱちスロ テラフォーマーズ / パチスロ バルタン星人 / 元祖ハネスロ再び** は6/20群へDEFER。
- **沖ドキ!パラダイス / -30、南国物語 SPECIAL** は6/27群へDEFER。
- ALL7 2016年6月一覧では、06/06のパチスロとしてドリームハナハナ-30を確認。Big Dreamは別資料で06/06 canonical。もう一度メーカー横断・HAZUSE/当時カレンダー横断を行い、追加がなければ06/06群をCLOSEDにする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_cutie-honey.md**
- retroQaNextInspection: **2006-02-19_heisei-katsuo-densetsu.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規時系列収集を止めずQAリレーで補完。

## 次回再開地点
1. **recordCount 985 / chronologicalFrontier 2016-06-06 / `2016-06-06_GROUP_OPEN_FINAL_AUDIT_REQUIRED`** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.985を最新mainから再取得。
3. **2016-06-06群を最終メーカー横断監査**。Big Dream / Dream Hanahana以外の全国初導入5号機を固定できれば未処理先頭から追加。
4. 追加がなければ `2016-06-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH` → 06/07〜06/12境界監査 → **2016-06-13群**へ進む。
5. ALL7の06/13一覧はパチンコ「アニマルパラダイス」「烈火の炎2」であり、パチスロ本線候補かどうかを種別確認して混入させない。パチスロ候補がなければ次の具体日06/20へ進む。
6. 06/20群でテラフォーマーズ / バルタン星人 / 元祖ハネスロ再び / Big Dream 6/20競合を再監査。
7. 06/27群で沖ドキ!パラダイス25/30、南国物語SPECIAL等を監査。
8. 遡及QAの次対象は `2006-02-19_heisei-katsuo-densetsu.md`（平成カツヲ伝説）。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
10. 競合は平均せずCONFLICT/variant差/定義差/予定日vs実導入日/地域導入差として双方保存。

## safeguard
- INDEXは旧集約なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainを優先。
- 全国導入日と記事公開日・検定日・発表日・納品予定日・地域先行日を混同しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 通常機械割と完全攻略値を混ぜない。
- パチンコ機をパチスロ本線へ混入させない。

## 主要出典 — 取得日 2026-09-08
### No.985 ドリームハナハナ-30
- グリーンべると: https://web-greenbelt.jp/00008644/
- 日刊アミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1646787.html
- パチビー: https://www.pachibee.jp/movies/index/12732
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
- K-Navi: https://p-kn.com/slot/2506/
- P-WORLD: https://www.p-world.co.jp/machine/database/8042
- すろぱちくえすと: https://www.slopachi-quest.com/article/dream-hanahana/
- なな徹: https://nana-press.com/kaiseki/machine/32/545/
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/hanahana-dream-30.html
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/20098/
- p-media 型式: https://p-media.info/%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%96%B0%E6%A9%9F%E7%A8%AE%E7%A2%BA%E8%AA%8D%EF%BC%8F%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A/
- 中一商事 型式: https://store.shopping.yahoo.co.jp/nakaiticom/60006.html

### date-boundary audit
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年6月: https://www.all7.jp/plans/index/2016/06
