更新日: 2026-09-10

## 現在地点
- recordCount: **1155**
- latestRecordAdded: **SLOTデビルマンχ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_slot-devilman-x.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ ゴルゴ13 — No.1153**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_RETROACTIVE_RELEASE_DATE_CONFLICT_GAP_RECOVERED_AGAIN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、実レコード、`LATEST_HANDOFF.md` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として採用。
- 開始時正本は **1154件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_RETROACTIVE_RELEASE_DATE_CONFLICT_GAP_RECOVERED**。
- 2017-09-19群を導入カレンダー・HAZUSE・K-Navi・当時解析で再横断し、エレコ **「SLOTデビルマンχ」** が未登録と判明したため **No.1155** として追加。
- 導入日は資料競合あり。HAZUSE・パチビーは **2017-09-04**、K-Navi・ちょんぼりすた・すろかい・slotnews777は **2017-09-19**。平均せず `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19` を保持し、型式・検定番号まで一体管理しているHAZUSEとパチビーが一致する **9/4をchronological canonical** とした。
- このため今回追加も9/19監査から発見した遡及漏れであり、chronologicalFrontier自体は **2017-09-19** のまま。

## No.1155 — SLOTデビルマンχ
- manufacturer: **エレコ**。
- formalModelName: **SLOTデビルマンχDA**。
- certificationNumber: **7S0565**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**。

### 性能コア
- 機械割: **98.4 / 99.0 / 101.0 / 104.1 / 109.0 / 115.2%**。
- ボーナス合算: **1/299.3 / 299.3 / 284.9 / 284.9 / 265.3 / 265.3**。
- ART初当たり: **1/566.2 / 554.0 / 542.4 / 486.2 / 509.1 / 387.3**。
- アモンボーナス: **1/16384.0**（全設定共通）。
- 50枚ベース: **約32.6〜32.9G**。
- ART純増: **約1.4枚/G**、ボーナス込み **約2.0枚/G**を定義分離。
- デビルボーナス / アモンボーナス: **各210枚**。
- ART「アーマゲドン」: **1セット50G**。
- 通常天井: ART終了後、ボーナス間 **1280G**で前兆後ART。

### resetBehavior v0.7
- 設定変更: **天井RESET / 内部状態RESELECT / 街or学校ステージ開始**。
- 純電源OFF→ON: **天井CARRYOVER / 内部状態CARRYOVER**。通常時は街or学校、ボーナス/ART中は当該状態を引き継ぐ。
- 据え置き: 純電源OFF→ONとは分離し、独立条件での直接比較資料を固定できなかったため **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。1280Gをゼロから再計数。
- 設定変更時のモードA/B・通常/高確/魔界等の具体的初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更判別: 初回デビルボーナスの設定変更示唆ボイス「デビルマンの力を教えてやる」の振り分けが **設定1〜3 20.0% / 設定4 27.4% / 設定5 29.0% / 設定6 30.5%**。単独確定扱いにはしない。
- 確定ガックン・初期出目・ランプ判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## CONFLICT / 品質メモ
- `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19`: 9/4系と9/19系を平均せず保持。canonical 9/4。
- `NET_INCREASE_DEFINITION_SPLIT`: ART単体約1.4枚/Gとボーナス込み約2.0枚/Gを別定義として保存。
- 最初に見つかったちょんぼりすた朝一表は「調査中」だったが、検索を止めず必勝本の機種別「天井&設定変更」まで横断し、設定変更 / 電源OFF→ONの直接比較契約を固定した。

## 2017-09-19群 — OPEN / 最終横断監査継続
- 今回も追加漏れが1件見つかったため群はCLOSEしない。
- 「SLOTデビルマンχ」は9/4 canonicalだが9/19資料群にも載るため、9/19群監査から発見した遡及漏れとして処理した。
- 次回は **2017-09-19導入カレンダーの残り機種をNo.1155までのmain実レコードと再突合**する。
- 特に同日カレンダーに現れる別スペック・メーカー表記揺れ・地域差を再確認し、追加漏れが見つかれば最古未処理を **No.1156候補**として追加。
- 複数系統で追加漏れ無しを確認できた時点で **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、次導入日群へ進む。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1155を再取得。
2. **1155件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_RETROACTIVE_RELEASE_DATE_CONFLICT_GAP_RECOVERED_AGAIN** を正本として継続。
3. 2017-09-19を導入カレンダー・メーカー別一覧・HAZUSE/P-WORLD/K-Navi/当時解析・地域差・別スペックで再横断し、No.1155までのmain実レコードと突合。
4. 漏れが見つかった場合は最古未処理を **No.1156候補**としてperformance core + resetBehavior v0.7を収集・保存。
5. 漏れが無ければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、複数導入日資料で次の日付群を確定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- HAZUSE: https://hazuse.com/machine/pachislot/7S0565/
- パチ＆スロ必勝本「天井&設定変更」: https://p.hisshobon.jp/machine/3047/1/66209
- パチビー: https://www.pachibee.jp/machines/index/217080024
- K-Navi: https://p-kn.com/slot/2881/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/45302/
- すろかい: https://slotkaiseki.hatenablog.com/entry/2017/08/16/153259
- P-WORLD: https://www.p-world.co.jp/machine/database/8489
- グリーンべると: https://web-greenbelt.jp/00009901/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-14308/
- slotnews777 2017年度新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
