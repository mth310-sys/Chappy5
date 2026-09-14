更新日: 2026-09-15

## 現在地点
- recordCount: **1779**
- latestRecordAdded: **L範馬刃牙 — No.1779**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-02-02_hanma-baki.md`
- chronologicalFrontier: **2026-02-02**
- schema: **resetBehavior v0.7**
- status: **2026-02-02_GROUP_OPEN_4_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1778を再同期。
- INDEXは旧スナップショットのためREADME規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1779 `L範馬刃牙` を追加。
- 2026-02-02群は4/6 canonical処理済み。
- resetBehaviorは設定変更/据え置き/純電断の天井・スルー回数・モード・内部状態・有利区間を機種固有資料で整理。
- 過去reset QAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` は現在mainのコード検索で一意取得できず、推測更新を行わず別管理継続。

## No.1779 — L範馬刃牙
- path: `docs/real_machine_db/machines/2026-02-02_hanma-baki.md`
- manufacturer: **平和 / OLYMPIA**
- formalModel: **L範馬刃牙L5**
- inspectionCode: **5S1472**
- releaseDate: **2026-02-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.5 / 100.5 / 105.2 / 107.9 / 110.6%**
- hanmaBonusInitialHit: **1/269.4 / 1/265.7 / 1/258.3 / 1/252.1 / 1/251.0 / 1/250.1**
- atInitialHit: **1/525.3 / 1/517.1 / 1/503.2 / 1/484.5 / 1/481.9 / 1/480.4**
- base: **約32.1G/50枚**
- netIncrease: **約2.8枚/G or 約5.2枚/G**
- basicPayout: **範馬BONUS 25G・平均約70枚 / AT初回50G+α・以降30G+α / 親子喧嘩15G×最大10セット**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1779 resetBehavior v0.7
- 設定変更時は有利区間、天井G、ボーナススルー回数をRESETし、モード・内部状態を再抽選。
- 通常最大天井は700G+α。設定変更時は `通常C 0.8% / チャンス61.7% / 天国37.5%` をcanonicalとし、**99.2%が200G+α以内**に範馬BONUS。
- 設定変更時を固定200G天井とは扱わない。残る0.8%の通常Cは最大700G+αで、初当たり「地上最強の親子喧嘩」濃厚。
- 純電源OFF→ONは天井G・スルー回数・モード・内部状態を引継ぎ。パチマガスロマガFREEでは有利区間、エンドルフィン効果、AT間天井も引継ぎと機種固有に明記。
- 据え置きはなな徹で有利区間引継ぎを直接確認。その他の進行も機種固有電断契約と整合する引継ぎとして保存。
- 朝一200G+αを超えて天井非発動かつ通常C否定なら据え置き濃厚材料。見た目表示のみでは判別困難。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- ボーナススルー回数天井は設定変更時に再抽選。設定1では7回目70.3%、設定6では7回目0.8%など、高設定ほど浅い回数が強く優遇。

## conflicts / normalization
- 設定変更時モード振り分けは、必勝本・なな徹・1gekiが `チャンス61.7% / 天国37.5%` で一致。一方、ちょんぼりすた・アルテマは `チャンス37.5% / 天国61.7%` と逆転表記。前者をcanonicalとし、後者は `CONFLICT_LIKELY_TRANSPOSED_CHANCE_HEAVEN_LABELS` として保持。
- 「設定変更時200G+α天井」という簡略表現と、通常C 0.8%で700G+αまで到達し得る詳細解析があるため、DBでは `99.2%が200G+α以内` として正規化。

## resetBehavior retrospective QA
- 過去handoffで使われていたQAカーソル候補 `2007-07-09_genju-haou-t.md` / `幻獣覇王T` / `2007-07-09` を最新mainで再検索。
- 現在のコード検索では該当実レコードを安全に一意固定できず、外部導入順から推測して既存COMPLETE_COREを変更していない。
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 次回も実体tree、旧handoff/コミット履歴系統、ファイル実体順を優先してカーソル復元を試みる。reset QA状態は性能コア完了判定と分離する。

## sources summary
retrievedAt: 2026-09-15
- HEIWA公式: https://www.heiwanet.co.jp/products/pachislot/bk2/
- HAZUSE: https://hazuse.com/hd/5s1472/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89156/
- 必勝本 天井・設定変更: https://hisshobon.com/machineinfo/89126/
- 必勝本 モード選択: https://hisshobon.com/machineinfo/89140/
- 必勝本 モード: https://hisshobon.com/machineinfo/89139/
- 必勝本 スルー回数: https://hisshobon.com/machineinfo/89111/
- 必勝本 範馬BONUS: https://hisshobon.com/machineinfo/89109/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/1098/34268/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/1098/34932/
- なな徹 モード: https://nana-press.com/kaiseki/machine/1098/34934/
- なな徹 天井: https://nana-press.com/kaiseki/machine/1098/34929/
- なな徹 親子喧嘩: https://nana-press.com/kaiseki/machine/1098/34947/
- 1geki: https://1geki.jp/slot/l_baki2/43/
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/heiwa/064786.php
- パチマガスロマガ攻略: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/54/tj05.php
- P-WORLD: https://www.p-world.co.jp/machine/database/10401
- ちょんぼりすた（競合確認）: https://chonborista.com/slot/orinpia-slot/248697/
- アルテマ（競合確認）: https://altema.jp/pachimo/lhanmabakireset

## 2026-02-02 known canonical queue
1. ~~スマスロ 攻殻機動隊 — No.1776 DONE~~
2. ~~Lパチスロうみねこのなく頃に2 — No.1777 DONE~~
3. ~~Lパチスロ 炎炎ノ消防隊2 — No.1778 DONE~~
4. ~~L範馬刃牙 — No.1779 DONE~~
5. **スマスロ ハナビ — candidate**
6. **スマスロ ゴブリンスレイヤーII — candidate**

## 次回再開地点
- 最新mainを再同期しNo.1779と本handoffを確認。
- **No.1780候補「スマスロ ハナビ」— 2026-02-02** から継続。
- その後 `スマスロ ゴブリンスレイヤーII` を同日群キューとして処理。
- 6/6完了後、PB・別型式・地域先行・延期/段階導入を再監査して2026-02-02境界をCLOSED判定。
- reset QAは性能コアと分離し、カーソル実体を安全に復元できた時点で次の欠損レコードから遡及補完。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。
