更新日: 2026-09-13

## 現在地点
- recordCount: **1596**
- latestRecordAdded: **燃えチバ-30 — No.1596**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-10-02_moechiba-30.md`
- chronologicalFrontier: **2023-10-02**
- frontierLatestMachine: **燃えチバ-30 — No.1596**
- schema: **resetBehavior v0.7**
- status: **2023-10-02_GROUP_CLOSED_4_OF_4_CANONICAL_PROCESSED / NEXT_GROUP_2023-11-06**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1595 `スーハナライジング-30` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1596 `燃えチバ-30` を性能コア + resetBehavior v0.7で追加。
- 2023-10-02群はcanonical 4機を全処理し、グリーンべると/P-WORLD新台スケジュールと別系統2023年導入一覧を再監査して **CLOSED 4/4** とした。
- 2023-10-16の新台スケジュールはパチンコのみで、パチスロ新規導入は確認されない。次のパチスロ実導入群は **2023-11-06**。

## No.1596 — 燃えチバ-30
- path: `docs/real_machine_db/machines/2023-10-02_moechiba-30.md`
- manufacturer: **ネット**
- formalModel / inspectionCode: **S燃えチバGNC-30 / 330194**
- releaseDate: **2023-10-02**
- generation/system: **6.5号機 / 30ΦメダルAT / 完全告知・モード管理型擬似ボーナス**
- settings: **L / 1 / 2 / 4 / 5 / 6（設定3非搭載）**
- payoutRate 設定1/2/4/5/6: **97.8 / 99.0 / 102.0 / 105.0 / 108.3%**。設定Lは公開固定値を確認できず。
- 初当り 設定1/2/4/5/6: **1/279 / 1/269 / 1/246 / 1/223 / 1/202**。
- base: **約32.5G/50枚（設定1掲載値）**。別解析では32.5〜33.2G表記。
- netIncrease: **約3.0枚/G**。
- basic: **BIG 70G・約210枚 / REG 30G・約90枚**。
- normal ceilings: **ゲーム数400G or 900G（最大900G+α） / チェリー最大30回 / 同一有利区間で天国非突入8回目ボーナス時は天国以上濃厚**。
- 400G到達時ボーナス当選率: **設定1 25% / 設定6 50%**（通常仕様。設定変更専用値ではない）。
- reset: 設定変更で **有利区間 / 天井 / モード / チェリー出現回数RESET**。
- carry: 据え置きは **有利区間 / 天井 / モード / チェリー出現回数CARRY_OVER**。
- pure power: **有利区間 / 天井 / 内部モードCARRY_OVER**を機種固有資料で確認。チェリー出現回数・天国スルー進行の純電断単独契約は `UNVERIFIED_AFTER_RESEARCH`。
- reset ceiling: 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。朝一400G固定天井説は実戦資料間で整合せず採用しない。
- reset mode: 設定変更時はモード再抽選。高モードが選択されやすい可能性の記述はあるが、主要解析の設定変更時モード振り分けは「調査中」で、固定数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- resetDetection: **有利区間ランプでは変更/据え置き判別不可**。別攻略資料も朝一判別不可。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- conflict: 朝一リセット後の400G以内早当たりを示唆する実戦系資料と、「400G付近仮天井」説を否定する当時観測が併存するため `CONFLICT_OBSERVATIONAL_RESET_400G`。設定変更専用400G固定天井にはしない。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **29f2f0d812605a739492c9a91fadff0299a609bf**

## 2023-10-02群 — CLOSED 4/4 canonical
1. L エヴァンゲリオン ～未来への創造～ — No.1593 **DONE**
2. スマスロ転生したらスライムだった件 — No.1594 **DONE**
3. スーハナライジング-30 — No.1595 **DONE**
4. 燃えチバ-30 — No.1596 **DONE**

### 群境界監査メモ
- グリーンべると/P-WORLDの2023-10-02新台スケジュールは上記4機をパチスロとして列挙し、別系統の2023年導入カレンダーでも10/2群を再照合。
- 2023-10-16は同スケジュール上、Pギルティクラウン2 / Pゴジラ対エヴァ PREMIUM / PストリートファイターV K.O.RUSHのみで、パチスロ新規導入なし。
- 型式 `S燃えチバGNC-30` / 検定番号 `330194` は東京都公安委員会検定通過まとめ（遊技通信web）で再確認。

## 次回再開地点
1. **次のパチスロ実導入群 2023-11-06** を最優先で監査し、未処理機種を時系列に処理する。
2. 現時点の主要候補: `スマスロ劇場版 魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語f-フォルテ-`、`L大工の源さん 超夢源`、`パチスロ交響詩篇エウレカセブン HI-EVOLUTION ZERO TYPE-ART`、`デジスロ JAC IN バージョン`、`スマスロとある魔術の禁書目録`、`スマスロ ひぐらしのなく頃に 業`。
3. 2023-11-06群はソースにより5機/6機の掲載差があるため、**最初に「Lひぐらしのなく頃に業SS」の実導入日をメーカー/業界/ホール導入実績で再監査**し、群のcanonical件数を確定してからNo.1597を採番する。
4. 以前から保持している `推しスロ アイドルVer.` は **2023-12-01実導入候補**として保持し、12月到達時に正式型式・実導入日を再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- NET / メーカー発表（Dream News転載）: https://www.dreamnews.jp/press/0000283571/
- 遊技日本 / P-WORLD 新台発表: https://news.p-world.co.jp/articles/25202/nippon
- 遊技通信web / 東京都公安委員会検定通過まとめ: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003710/
- なな徹 ボーナス確率・機械割: https://nana-press.com/kaiseki/machine/607/16990/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/607/16994/
- なな徹 モード解析: https://nana-press.com/kaiseki/machine/607/16995/
- 一撃 機種概要: https://1geki.jp/slot/s_moechiba30/
- 一撃 天井・設定変更: https://1geki.jp/slot/s_moechiba30/3/
- パチ＆スロ必勝本 通常時: https://p.hisshobon.jp/machine/4140/1/98428
- すろぱちくえすと 朝一比較: https://www.slopachi-quest.com/article/noechiba30-tenjou/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/193130/
- グリーンべると / P-WORLD 2023-10-02新台スケジュール: https://news.p-world.co.jp/articles/25554/greenbelt
- 2023年導入カレンダー補助: https://pachinkopachisro.com/archives/57208678.html

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
