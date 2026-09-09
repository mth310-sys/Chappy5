更新日: 2026-09-09

## 現在地点
- recordCount: **1131**
- latestRecordAdded: **SLOTデビルマンχ**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_slot-devilman-chi.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **SLOTデビルマンχ — No.1131**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1130「パチスロ笑ゥせぇるすまん3～笑撃のドーン～」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時mainは **1130件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN**。
- 前handoff最優先候補「亜人」を再監査したところ、9/4表記資料がある一方、グリーンべると2017-08-10記事は納品9/18開始予定、HAZUSE・K-Navi・ちょんぼりすた・期待値見える化は9/19導入で一致。時系列誤登録を避けるため **9/4群では登録せず、2017-09-19群候補へDEFER**。9/4表記は将来レコードでCONFLICT保持する。
- 次候補「SLOTデビルマンχ」はGitHub既存検索で未登録を確認し **No.1131** として登録。
- 型式 **SLOTデビルマンχDA**、検定番号 **7S0565** はHAZUSEで直接確認。
- 導入日はHAZUSE・パチビー・年別導入カレンダーが **2017-09-04**、K-Navi・ちょんぼりすた・すろかいが **2017-09-19**。業界記事は9月予定までのため **CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19**。本線chronological canonicalは9/4で登録。
- 性能コアは機械割 **98.4 / 99.0 / 101.0 / 104.1 / 109.0 / 115.2%**、ART初当たり **1/566.2 / 554.0 / 542.4 / 486.2 / 509.1 / 387.3**、ボーナス合算 **1/299.3 / 299.3 / 284.9 / 284.9 / 265.3 / 265.3**、ベース代表値 **約32.6G/50枚**。
- ART純増 **約1.4枚/G**、ボーナス込み **約2.0枚/G**。デビルボーナス/アモンボーナスはいずれも **210枚**、ART「アーマゲドン」は **1セット50G**。
- 通常天井は **1280G**。設定変更専用の短縮天井は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehavior v0.7: 設定変更時 **天井RESET / 内部状態再抽選 / 街or学校ステージ**。純電源OFF→ONは **天井CARRYOVER / 内部状態CARRYOVER**、通常時は街or学校へ、ボーナス/ART中は状態引継ぎ。
- 据え置きは純電断CARRYOVER契約から継続挙動が支持されるが、電源操作なし据え置きを独立列で固定できず `UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH`。
- 通常時モードA/Bは確認できるが、設定変更時のモード再抽選/振り分けは直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後1回目のデビルボーナスには専用セリフ振り分けがあり、技術介入成功時の「デビルマンの力を教えてやる」が **設定変更示唆**。2回目以降表では非搭載のため朝一変更推測に有効。ただし非出現で据え置き確定ではない。
- 本機固有ガックンの確定契約/発生率は検索語と資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1131 — SLOTデビルマンχ
- manufacturer: **エレコ（ユニバーサルエンターテインメント系列）**
- releaseDate: **2017-09-04 canonical / CONFLICT 2017-09-19**
- formalModelName: **SLOTデビルマンχDA**
- certificationNumber: **7S0565**
- generation/system: **5号機（5.5号機世代） / A+ART / セットストック型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / 状態再抽選 / 街or学校ステージ**。
- pure power OFF→ON: **天井・状態CARRYOVER**。
- stay setting: **CARRYOVER支持。ただし電源操作なし据え置きの独立資料は未固定**。
- normal ceiling: **1280G**。
- reset ceiling shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- mode after reset: **UNVERIFIED_AFTER_RESEARCH**。
- reset detection: **設定変更後1回目のデビルボーナス専用「デビルマンの力を教えてやる」=設定変更示唆**。

## 2017-09-04群 — OPEN
登録済み:
1. **パチスロ北斗の拳 新伝説創造 — No.1127**
2. **ぱちスロAKB48 勝利の女神 — No.1128**
3. **回胴性ミリオンアーサー — No.1129**
4. **パチスロ笑ゥせぇるすまん3～笑撃のドーン～ — No.1130**
5. **SLOTデビルマンχ — No.1131**（導入日9/4 vs 9/19 CONFLICT）

9/4候補からDEFER:
- **亜人** — 9/4表記あり。ただし業界記事の納品9/18予定 + HAZUSE/K-Navi/複数解析9/19が強く、2017-09-19群で処理予定。将来レコードでは9/4表記もCONFLICT保持。

次候補:
1. **アメイジング・スパイダーマン**
2. **セイクリッドセブン**
3. **YASUDA7**
4. **ゴルゴ13**（2017年版。9/4カレンダー資料あり。既存2006年版と混同禁止）
5. **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等、資料によって9/4表記がある機種を地域導入/掲載定義差まで横断監査。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1131を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1131を再取得。
2. **1131件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「アメイジング・スパイダーマン」No.1132候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. その後 **セイクリッドセブン → YASUDA7 → ゴルゴ13（2017版）** を優先監査。
5. 9/4群は全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
6. 「亜人」は **2017-09-19群候補としてDEFER**。9/4表記とのCONFLICTを保持して処理する。
7. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1131 SLOTデビルマンχ
- HAZUSE 基本/型式/検定/導入日: https://hazuse.com/machine/pachislot/7S0565/
- HAZUSE 設定推測/設定変更示唆ボイス: https://hazuse.com/machine/pachislot/7S0565/genre/208/
- HAZUSE ART/内部状態: https://hazuse.com/machine/pachislot/7S0565/genre/209/
- パチビー 基本スペック/導入日/ART構造: https://www.pachibee.jp/machines/index/217080024
- 遊技日本 業界記事/ART・ボーナス性能: https://yugi-nippon.com/pachinko-new-machine/post-14308/
- グリーンべると 業界記事/ボーナス・ART確率: https://web-greenbelt.jp/00009901/
- 必勝本 天井&設定変更/電源OFF ON比較: https://p.hisshobon.jp/machine/3047/1/66209
- 必勝本 システム解説: https://p.hisshobon.jp/machine/3047/1/66088
- ちょんぼりすた スペック/ベース/導入日差: https://chonborista.com/slot/universal-slot/45302/
- すろぱちくえすと: https://www.slopachi-quest.com/article/devilman-%CF%87/
- K-Navi 導入日: https://p-kn.com/slot/2881/
- すろかい スペック/ベース/導入日: https://slotkaiseki.hatenablog.com/entry/2017/08/16/153259

### 亜人 DEFER根拠
- グリーンべると 2017-08-10発表/納品9月18日開始予定: https://news.p-world.co.jp/articles/9518/greenbelt
- HAZUSE 型式/検定/導入9月19日: https://hazuse.com/machine/pachislot/7S0590/
- K-Navi 導入9月19日: https://p-kn.com/slot/2870/
- ちょんぼりすた 導入9月19日/リセット: https://chonborista.com/slot/orinpia-slot/44167/
- 期待値見える化 導入9月19日: https://slotjin.com/zone/ajin/
- すろぱちくえすと 9月4日表記（CONFLICT側）: https://www.slopachi-quest.com/article/ajin/
