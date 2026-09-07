# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **906**
- latestRecordAdded: **サンダーVリボルト**（アクロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-17_thunder-v-revolt.md`
- chronologicalFrontier: **2015-08-17**
- frontierLatestMachine: **サンダーVリボルト**
- frontierRecord: `docs/real_machine_db/machines/2015-08-17_thunder-v-revolt.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-17_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.905 `2015-08-03_pachislot-strike-witches.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **905件 / 2015-08-03 / 08-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- `2015-08-04〜2015-08-16` 境界は直前handoffの `CLOSED_FOR_CURRENT_RESEARCH` を引き継いだ。
- 2015-08-17群の先頭候補 **アクロス「サンダーVリボルト」** が未登録であることをmainで確認し、No.906として追加。

## No.906 — サンダーVリボルト

- record: `docs/real_machine_db/machines/2015-08-17_thunder-v-revolt.md`
- manufacturer: **アクロス**
- formalModelName: **サンダーVリボルトUR**
- inspectionNumber: **5S0424**
- systemType: **ノーマル / 技術介入Aタイプ**
- canonical releaseDate: **2015-08-17**
- ユニバ公式ブログが2015-08-16時点で「明日8月17日全国導入開始」と明記。グリーンべるとの **08-16納品予定** は工程差として分離。
- BIG: **1/277.7 / 270.8 / 264.3 / 258.0 / 252.1 / 248.2**。
- REG: **1/420.1 / 381.0 / 348.6 / 321.3 / 292.6 / 264.3**。
- 合算: **1/167.2 / 158.3 / 150.3 / 143.1 / 135.4 / 128.0**。
- 通常掲載機械割: **97.3 / 99.7 / 101.9 / 106.3 / 108.8 / 111.2%**。
- 完全攻略機械割: **99.1 / 101.4 / 103.7 / 106.3 / 108.8 / 111.2%**。通常値と別定義で保持。
- 50枚ベース: **約34G**。再探索後も比較可能な複数独立ソース照合が弱いため `ANALYSIS_SINGLE`。
- BIG **最大333枚** / REG **最大111枚**。
- 天井非搭載。AT/ART/CZ・規定G解除モードなし。有利区間非該当。

### resetBehavior v0.7

- 天井/規定Gモード/高確AT状態等がない純ノーマルのため、ゲーム数天井リセット・短縮天井・朝一モード優遇は `NOT_APPLICABLE`。
- 一撃の2015-08-04当時ページは **設定変更時詳細「現在調査中」/ 電源OFF・ON「現在調査中」** と明記。
- 機種名・型式・メーカー・A PROJECT・サンダーシリーズ名と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン` を組み替えて再探索したが、本機固有のリール初動・表示・純電断契約・ガックンを安全に固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 他のアクロス機のガックン・朝一挙動は流用していない。
- 公開朝一専用数値: `NONE_APPLICABLE_OR_CONFIRMED`。

## 2015-08-03群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み最終群:
1. 煩悩BREAKER禅 — 山佐 — No.902
2. ガリンポ-30 — エマ — No.903相当
3. ジャッカスチーム — 大都技研 — No.904
4. パチスロ ストライクウィッチーズ — オーイズミ — No.905

- 直前handoffの監査結果をそのまま引き継ぐ。

## 2015-08-04〜2015-08-16境界 — CLOSED_FOR_CURRENT_RESEARCH

- 直前handoffで全メーカー横断監査済み。
- 2015-08-16は『サンダーVリボルト』の納品予定日として確認されるが、全国実ホール導入は08-17のため境界へ混入させない。

## 2015-08-17群 — OPEN

今回処理済み:
1. **サンダーVリボルト** — アクロス — No.906。

強い残候補:
1. **乙女魂 ～光と無月～** — 高砂電器産業 — 2015-08-17。
   - KONAMI公式系ブログが2015-08-17より全国ホール登場予定と明記。
   - HAZUSEも導入開始2015-08-17、型式乙女魂JV / 検定3S0939。

- 08/17群はまだCLOSEDにしない。
- 『乙女魂』処理後、K-Navi / HAZUSE / 当時新台カレンダー / メーカー・業界記事 / 旧DBで **2015-08-17全メーカー横断再監査**を行ってからのみCLOSED判定する。

## 次回再開地点

1. **recordCount 906 / chronologicalFrontier 2015-08-17 / 08-17_GROUP_OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.906 `2015-08-17_thunder-v-revolt.md` を再確認。
3. 次の未処理機種は **高砂電器産業「乙女魂 ～光と無月～」**。未登録確認後、性能コア + resetBehavior v0.7を本機固有資料で収集する。
4. 乙女魂では **ボーナス初当たり表記の資料差**（例: HAZUSE 1/254.2〜1/200.0 と、他資料の初当たり定義）を定義確認し、異なる指標を混ぜない。
5. 天井は「スケバンバトル&ボーナス間777G」と「ボーナス間1200G」の二系統が当時解析にあるため、設定変更/据え置き/純電断で各カウンタがどう扱われるかを別々に探索する。
6. 08/17群を全メーカー再監査し、追加未処理機がなければ `2015-08-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH` として次の具体日へ進む。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ自動転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### サンダーVリボルト
- ユニバーサル公式製品一覧: https://www.universal-777.com/product/slot/2015/
- ユニバ公式全国導入告知: https://ameblo.jp/aruzefreaks/entry-12058430498.html
- グリーンべると: https://web-greenbelt.jp/00007962/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0424/
- 一撃: https://1geki.jp/slot/thundervrevolt/
- 一撃 天井/設定変更: https://1geki.jp/slot/thundervrevolt/3/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/10786/
- K-Navi: https://p-kn.com/slot/2323/
- K-Navi REG技術介入: https://p-kn.com/slot/2323/55251/
- 50枚ベース照合候補: https://www.pachislotblog.tokyo/across-series-setteihanbetsu/

### 次候補 — 乙女魂 ～光と無月～
- KONAMI公式系ブログ: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
- HAZUSE: https://hazuse.com/machine/pachislot/SX0054/
- ちょんぼりすた: https://chonborista.com/slot/takasago-slot/11303/
- すろぱちくえすと: https://www.slopachi-quest.com/article/otome-soul/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/08/a.php
