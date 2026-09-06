# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **758**
- latestMachineAddedByChronology: **魂斗羅3D**（KPE）
- latestRecord: `docs/real_machine_db/machines/2013-08-19_contra-3d.md`
- chronologicalFrontier: **2013-08-19**
- frontierLatestExactDateMachine: **魂斗羅3D**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-08-19_GROUP__NEXT_BOUNDARY_AUDIT_2013-08-20_FORWARD**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、旧集約状態の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前レコード `2013-08-19_zegapain.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり、より新しい **LATEST_HANDOFF + 実レコード** を正として継続。
- 開始時main正本: recordCount **757** / chronologicalFrontier **2013-08-19** / 08-19群OPEN。
- 同日未処理先頭 **魂斗羅3D（KPE）** はrepo未登録を確認し、性能コア + resetBehavior v0.7を758件目として追加。

## 今回追加 — 魂斗羅3D

### identity / 性能コア

- manufacturer: **KPE**。
- releaseDate: **2013-08-19**。K-Navi / パチスロ解析DBで一致。KONAMI公式アーカイブでも2013年8月稼働開始・5号機ATを確認。
- generation/system: **5号機 / AT + ゲーム数管理 + CZ / ボーナス非搭載**。
- 機械割: **97.6 / 99.3 / 101.3 / 104.6 / 107.8 / 111.3%**。
- AT初当たり: **1/295.2 / 1/286.7 / 1/275.4 / 1/255.2 / 1/238.9 / 1/222.5**。
- baseGamesPer50: **平均約32G/50枚**（単一解析資料値）。
- AT「魂斗羅タイム」: **1セット40G+α / 純増約2.8枚/G**。
- 通常モード最大規定G: **通常A 999G / 通常B 640G / 天国128G / 真天国32G**。
- 通常最大天井: **AT間999G、到達でAT確定**。

### resetBehavior v0.7

- **設定変更時は天井到達までのゲーム数がクリア**されることをパチスロ解析DBと旧天井DBの2系統で確認。`gameCounterReset.settingChange = CLEAR_CONFIRMED_MULTI_SOURCE`。
- 純据え置き時の完全保持契約、設定変更なしの電源OFF→ON、設定変更時の内部状態、ガックン/初期出目/液晶等による変更判別は、機種名・KPE・魂斗羅シリーズと `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード / ガックン` を組み替えて横断後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の一律固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 2014年回顧実戦記事に **「設定変更時の約33%で天国or真天国」** とあるが、高信頼解析表/別系統へ二重照合できなかったため **SINGLE_LOW_CONFIDENCE_RESET_MODE_REPORT** としてのみ保存。高信頼確定値にしない。
- 天国最大128G / 真天国最大32G自体は複数解析資料で確認済み。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## 境界監査 / 同日群

2013-08-19登録済み:
1. **戦国乙女～剣戟に舞う白き剣聖～**
2. **パチスロ クイーンズブレイド2 玉座を継ぐ者**
3. **パチスロ ゼーガペイン**
4. **魂斗羅3D**

- K-Naviの個別導入日、当時業界記事、メーカー/シリーズ名を変えた再検索で08-19同日候補を再監査。
- 今回の監査では上記4機以外に **2013-08-19を具体導入日として固定できる未登録5号機を追加確認できなかった**。
- よって **2013-08-19群をCLOSED** とする。
- 2013-08-26表記には後年資料で検定/認定期限由来の情報が混じるため、次回は導入日と検定日を分離し、**2013-08-20以降の次の具体ホール導入日**を当時導入カレンダー/個別機種資料で確定してから前進する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規収集キューを優先し、既存性能値の無駄な再収集はしない。

## 次回再開地点

1. **recordCount 758 / chronologicalFrontier 2013-08-19 / 08-19群CLOSED** から開始。
2. **2013-08-20以降の境界監査**を、K-Navi等の導入カレンダー・メーカー/業界当時資料・個別機種ページで行う。
3. 検定通過日/認定期限から逆算された日付をホール導入日へ混入させない。
4. 次の具体導入日で最初の未登録5号機を確定し、性能コア + resetBehavior v0.7を継続。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から、最初のresetBehavior欠損機を確定して補完。

## 主要出典 — 取得日 2026-09-06

### 魂斗羅3D

- KONAMI公式アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2013/contra/`
- K-Navi: `https://p-kn.com/slot/1884/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7126`
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5903/greenbelt`
- パチスロ解析DB: `https://pachislo-data.com/kpe/contra3d`
- パチスロ立ち回り講座 旧天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/33/a.php`
- スロスター当時記事: `https://ameblo.jp/slostar/entry-11549889316.html`
- terias回顧実戦記事（設定変更時約33%天国or真天国・低信頼扱い）: `https://ameblo.jp/terias/entry-11778680987.html`

## commits

- 758th record add: `3dae4dc7da883530a26c1e6c661f6c8b08359220` (`db: add Contra 3D with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay handoff after Contra 3D`)
