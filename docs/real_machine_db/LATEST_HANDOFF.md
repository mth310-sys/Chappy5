更新日: 2026-09-15

## 現在地点
- recordCount: **1782**
- latestRecordAdded: **スマスロ 甲鉄城のカバネリ 海門決戦 — No.1782**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-03-02_smartslot-kabaneri-unato-kessen.md`
- chronologicalFrontier: **2026-03-02**
- schema: **resetBehavior v0.7**
- status: **2026-03-02_BOUNDARY_OPEN_1_OF_2_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1781を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 2026-02-02群がCLOSED済みであることを確認し、次の未処理No.1782 `スマスロ 甲鉄城のカバネリ 海門決戦` を追加。
- 2026-03-02群は1/2 canonical処理済み。残りは `スマスロ サンダーV`。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は未解決のまま性能コア本線と分離し、推測更新は行っていない。

## No.1782 — スマスロ 甲鉄城のカバネリ 海門決戦
- path: `docs/real_machine_db/machines/2026-03-02_smartslot-kabaneri-unato-kessen.md`
- manufacturer: **タイヨーエレック製 / サミー**
- formalModel: **L 甲鉄城のカバネリ 海門決戦 XX**
- inspectionCode: **5S1358**
- releaseDate: **2026-03-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.5 / 100.8 / 106.0 / 111.0 / 114.9%**
- bonus initial hit: **1/254.2 / 1/242.3 / 1/239.6 / 1/214.0 / 1/203.2 / 1/195.1**
- ST: **1/422.5 / 1/405.9 / 1/398.7 / 1/357.2 / 1/332.6 / 1/318.5**
- base: **約31.4G/50枚**
- netIncrease: **約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1782 resetBehavior v0.7
- 設定変更時は有利区間・天井G数・周期数・内部状態をRESET/再抽選。
- 無名/生駒/カバネポイント、黒煙りポイントも再抽選。ナビ高確・(超)カバネリ高確は非高確へ戻る。
- 据え置きは有利区間・天井・内部状態を引継ぎ。
- 純電源OFF→ONは天井までのG数/周期数、各ポイント、高確状態、黒煙りポイントを引継ぎ。
- 通常天井は **996G+α / 最大6周期**。設定変更後は **596G+α / 最大4周期**へ短縮。
- 天井短縮時は次回STまでの機械割が設定1でも100%以上。なな徹公開期待値ではリセット0G等価打ち出し+1000円（同サイト条件）。
- 設定変更後の開始ステージは必勝本が実戦上「操車場」、なな徹は「現在調査中」のため確定仕様にせず `OBSERVED_VS_UNDER_RESEARCH`。
- 朝一596G+α/4周期を超えて該当天井非発動なら設定変更否定の強い材料。
- 本機固有ガックン条件/発生率は表記揺れ・型式・タイヨーエレック・サミーで再探索後も高優先機種固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / normalization
- メーカーは解析DBでSammy、1gekiでTAIYO ELEC表記。業界資料で「タイヨーエレック製」、サミー公式でサミー新機種として扱うため **製造元 / ブランド・発表元の定義差**として `タイヨーエレック製 / サミー` に正規化。
- ベースは約31Gと約31.4Gの表記差。丸め差としてcanonicalは約31.4G/50枚。
- 設定変更時開始ステージは「実戦上、操車場」vs「現在調査中」。確定仕様としては扱わない。
- 旧予定資料の2026-02-10表記は実導入日ではなく、サミー公式・HAZUSE・1geki・パチビー等で2026-03-02導入が一致するため実導入日は2026-03-02。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は実体を安全に一意固定できるまで推測補完しない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15

### No.1782 スマスロ 甲鉄城のカバネリ 海門決戦
- サミー公式マイスロ: https://www.sammy.co.jp/japanese/myslot/news/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1358/
- 1geki 基本ページ: https://1geki.jp/slot/l_kabaneri2/
- 1geki 天井: https://1geki.jp/slot/l_kabaneri2/3/
- パチビー: https://www.pachibee.jp/machines/index/226020000
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/89070/
- 必勝本 通常時: https://hisshobon.com/machineinfo/89073/
- 必勝本 黒煙りポイント: https://hisshobon.com/machineinfo/89067/
- 必勝本 ST: https://hisshobon.com/machineinfo/89078/
- 必勝本 裏景之ST: https://hisshobon.com/machineinfo/89083/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1097/35407/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1097/35403/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/1097/
- G-net: https://g-net-ps.com/info/s0250/
- グリーンべると: https://web-greenbelt.jp/post-106904/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/248689/

### 2026-03-02 boundary audit
- P-Summa 2026年3月整理: https://psumma.jp/pachislo/69482/
- 情報島 3/2導入前評価: https://p-johojima.jp/colum/post-27100/
- サミー公式 2026-03-02導入告知: https://www.sammy.co.jp/japanese/myslot/news/

## 2026-03-02 canonical queue — OPEN 1/2
1. ~~スマスロ 甲鉄城のカバネリ 海門決戦 — No.1782 DONE~~
2. **スマスロ サンダーV — candidate No.1783**

## 次回再開地点
- 最新mainを再同期しNo.1782と本handoffを確認。
- **No.1783候補「スマスロ サンダーV」— 2026-03-02** から継続。
- 処理後、PB・別型式・地域先行・延期/段階導入を再監査して2026-03-02境界をCLOSED判定。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
