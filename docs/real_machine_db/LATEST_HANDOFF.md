更新日: 2026-09-10

## 現在地点
- recordCount: **1192**
- latestRecordAdded: **秘宝伝 Rev.**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-21_hihouden-rev.md`
- chronologicalFrontier: **2018-05-21**
- frontierLatestMachine: **秘宝伝 Rev. — No.1192**
- schema: **resetBehavior v0.7**
- status: **2018-05-07_GROUP_CLOSED_2018-05-21_GROUP_OPEN_RETRO_QA_CASSHERN_DONE**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1191を再取得して開始。
- `INDEX.md` は旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時正本は **1191件 / chronologicalFrontier 2018-05-07**。
- `秘宝伝 Rev.` の既存レコードがないことを確認し、日付競合を公式補助・業界事前資料・HAZUSE・当時解析・導入一覧で再監査。
- 2018-05-21を複数独立資料が支持し、PiDEAの「納品5/20～」とも整合するためcanonicalを2018-05-21に裁定。2018-05-07表記はCONFLICTとして保持。
- No.1192 `秘宝伝 Rev.` をperformance core + resetBehavior v0.7付きで新規登録。
- 出玉率は事前業界資料と導入後解析で設定3～6が競合するため平均化せず双方保持。導入後複数解析一致値をcanonical tableに採用。
- 遡及QAは `2006-07_shinzo-ningen-casshern.md` を再探索し、性能側`PARTIAL`は維持したままreset側のみ`PARTIAL_RESEARCH_EXHAUSTED`へ更新。
- Git履歴でキャシャーン作成直後の追加レコードが `2006-07_hanasakari.md` であることを確認し、次QAカーソルを固定。

## No.1192 — 秘宝伝 Rev.
- path: `docs/real_machine_db/machines/2018-05-21_hihouden-rev.md`
- manufacturer: **サボハニ（大都技研）**
- releaseDateCanonical: **2018-05-21**
- releaseDateConflict: **2018-05-07 vs 2018-05-21**
- formalModelName: `秘宝伝Rev.／A4`
- certificationNumber: `7S1918`
- generation/system: **5.9号機 / A+ART**
- canonical機械割: **97.9 / 99.6 / 103.7 / 106.5 / 109.9 / 114.3%**
- 事前PiDEA機械割: **97.9 / 99.6 / 101.1 / 103.4 / 106.4 / 110.2%** — `CONFLICT`保持。
- ボーナス+ART合算: **1/201.3 / 195.0 / 182.4 / 167.6 / 158.4 / 139.9**。
- 50枚ベース: **約31G**。
- ART純増: **約1.4枚/G、ボーナス込み約1.9枚/G**。
- BIG/MIDDLE: **約150枚** / Rev BONUS: **約90枚**。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7
- settingChange: 有利区間ランプ消灯、内部状態リセット。ただし初期が通常確定かは原資料に疑問符があるため未確定。
- powerOFF→ON: 有利区間ランプ・内部状態を引き継ぐ。本機固有の当時朝一表を根拠とする。
- setting kept: 有利区間ランプ点灯が翌朝残れば据え置き濃厚という判別情報あり。
- gameCounter / ceiling: `NOT_APPLICABLE_NO_CEILING`。
- mode/state: 通常/高確/超高確は存在。設定変更時初期振り分け数値は`UNVERIFIED_AFTER_RESEARCH`。
- advantageousSection: 設定変更時は引き継がず、電源OFF→ONではランプ状態を引き継ぐ。
- morning benefit: 出玉優遇ではなく、設定変更後1回目MIDDLE BONUS開始時の**50%でメジェド横切り**。
- resetDetection: メジェド横切りは設定変更確定演出。BIGを先に引いた場合も抽選有効。有利区間ランプ残存は据え置き濃厚。
- gakkun: `UNVERIFIED_AFTER_RESEARCH`。

## 2018-05-07 / 2018-05-21境界
- 5/7群登録済み: No.1188 大海物語4 / No.1189 北斗修羅 羅刹ver. / No.1190 FAIRY TAIL / No.1191 楽シーサー30Φ。
- 秘宝伝Rev.を2018-05-21 canonicalへ裁定したため、5/7群は今回CLOSED。
- 2018-05-21群はOPEN。導入一覧上の次候補は `ディスクアップ`、`マジカルハロウィン6`、`シークレットハイビスカス25π`。次回は全メーカー/別スペックを含め漏れ監査して未登録先頭から処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_shinzo-ningen-casshern.md**（新造人間キャシャーン）。
- qaResult: **PARTIAL_RESEARCH_EXHAUSTED**（性能側status `PARTIAL`は維持）。
- 設定変更/据え置き/純電断時のRT/AT・ステージ・ミニゲーム関連状態: `UNVERIFIED_AFTER_RESEARCH`。
- 通常時天井/短縮天井/公開朝一恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: `NOT_APPLICABLE`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_hanasakari.md`（花盛）。
- cursorEvidence: Git履歴上、キャシャーン追加commit `01ab3390...` の直後が花盛追加commit `be42c692...`。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率の競合は平均化せず`CONFLICT`として保持する。
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1192を再取得。
2. **1192件 / chronologicalFrontier 2018-05-21 / 5/21群OPEN**を正本として継続。
3. 5/21群を全メーカー/別スペック/地域差で監査し、GitHub未登録先頭からNo.1193候補としてperformance core + resetBehavior v0.7を収集。現時点の第一候補は`ディスクアップ`。
4. 遡及QAは `2006-07_hanasakari.md`（花盛）から継続。
5. PARTIAL/UNVERIFIED/reset欠損は公式・業界・当時解析・古DB・アーカイブ・回顧で検索系統を変えて再探索。

## 主要出典 — 取得日 2026-09-10
### No.1192 秘宝伝 Rev.
- HAZUSE: https://hazuse.com/machine/pachislot/7S1918/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%A7%98%E5%AE%9D%E4%BC%9DRev%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 期待値見える化: https://slotjin.com/slot/hihoudenrev/
- スロパチネット: https://slopachi-net.com/hihouden-rev
- すろぱちくえすと本機: https://www.slopachi-quest.com/article/hihouden-rev/
- すろぱちくえすと2018一覧: https://www.slopachi-quest.com/article/sindai-2018/
- 2-9伝説: https://29den.com/newslot/
- 大都技研サウンドトラック: https://www.daitogiken.com/products/music/soundtrack/

### retro QA — 新造人間キャシャーン
- グリーンべると: https://web-greenbelt.jp/00004745/
- P-WORLD: https://www.p-world.co.jp/machine/database/4245
- 5号機クロニクル JPS: https://5goki.com/jps
- コムシード2006ニュースリリース: https://www.commseed.net/news-old/pdf/news_pdf/2006/060720_p1.pdf
- パチ7 JPS歴史レビュー: https://pachiseven.jp/articles/detail/11436
