更新日: 2026-09-13

## 現在地点
- recordCount: **1621**
- latestRecordAdded: **スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_code-geass-hangyaku-fukkatsu.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_OPEN_1_OF_8_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1620 `パチスロ武装神姫` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 2024-01-09群CLOSED 5/5を確認し、次の未処理No.1621 `スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ` を性能コア + resetBehavior v0.7で追加。
- 2024-02-05群は前handoffのknown 8機を継続キューとして保持。今回1/8処理済み。

## No.1621 — スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ
- path: `docs/real_machine_db/machines/2024-02-05_code-geass-hangyaku-fukkatsu.md`
- manufacturer: **サミー**
- formalModel: **Lコードギアス復活のルルーシュZS**
- inspectionCode: **3S0863**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.9 / 98.8 / 101.5 / 106.0 / 109.9 / 113.4%**
- ボーナス: **1/282.9 / 1/278.1 / 1/260.6 / 1/244.1 / 1/229.2 / 1/217.5**
- AT: **1/439.5 / 1/432.1 / 1/403.3 / 1/355.9 / 1/320.3 / 1/296.1**
- base: **約32.3G/50枚**
- 純増: **約2.8枚/G**
- 通常時BIG: **30G / AT期待度約40%**
- エピソードボーナス: **30G / AT濃厚**
- AT: **1セット30G+α / ナイトメアバトル勝利で継続**
- normal ceiling: **AT間最大1000G+α**

## No.1621 resetBehavior v0.7
- setting change: **有利区間・AT間天井進行・内部状態RESET。専用リセットモードへ移行**
- carry over: **据え置きは天井進行・内部モード・内部状態・有利区間CARRY_OVER**
- power OFF→ON: **天井進行・内部モード・内部状態・有利区間CARRY_OVER。開始ステージはUNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **通常最大1000G+α → 700G+αへ短縮**
- modeAfterReset: **設定変更専用リセットモード。100/200/400/500G台がボーナスの主要チャンス帯**
- advantageousSection: **設定変更RESET / 据え置き・純電断CARRY_OVER**
- resetBenefits: **初回ボーナスのエピソードボーナス期待度約25%**
- resetDetection: **有利区間ランプ判別不可。朝一700G超でAT非当選なら据え置き濃厚材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- publicMorningNumbers: **リセット天井700G+α / 初回EP約25% / 100・200・400・500G台が主要ゾーン**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_START_STAGE**

## No.1621 CONFLICT / 注記
- 有利区間の設定変更時RESETは主要解析で一致。
- なな徹2024-03時点では「判明しているリセットタイミングは設定変更時のみ」とする一方、後年解析ではAT終了時の一部・エンディング終了時もリセット契機として掲載。解析更新時期の差として保持し、朝一の設定変更契約とは分けて記録。
- 主要性能値（機械割、ボーナス/AT初当たり、純増、ベース）は複数高信頼資料で一致し、今回実用上の数値CONFLICTなし。

## 2024-02-05群 — OPEN 1/8 known canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — NEXT
3. スマスロ 冴えない彼女の育てかた — PENDING
4. Sky Love — PENDING
5. スマスロ ゴジラ対エヴァンゲリオン — PENDING
6. Lストライクウィッチーズ2 — PENDING
7. GⅠ優駿倶楽部黄金 — PENDING
8. ワードオブライツⅡ — PENDING

境界監査:
- 前handoffで2024-02-05 known候補8機を固定済み。
- 2024年2月市場資料では2月導入新機種8機という業界集計があり、known 8機と件数整合。ただし群CLOSED前に各機処理後、PB・別型式・地域先行/段階導入・延期候補を再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1621と本handoffの反映を再取得確認。
2. **No.1622候補 `Lパチスロ ガールズ&パンツァー 最終章`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. その後、`スマスロ 冴えない彼女の育てかた` → `Sky Love` → `スマスロ ゴジラ対エヴァンゲリオン` → `Lストライクウィッチーズ2` → `GⅠ優駿倶楽部黄金` → `ワードオブライツⅡ` の順で同日群を継続。
4. 8機処理後に2024-02-05群のPB・別型式・地域先行/段階導入・延期候補を再監査し、CLOSED判定する。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-13
### スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ
- 遊技通信/P-WORLD 型式・初当たり・純増: https://news.p-world.co.jp/articles/26066/yugitsushin
- 遊技日本/P-WORLD サミー発売発表・型式: https://news.p-world.co.jp/articles/26051/nippon
- グリーンべると/P-WORLD ベース・初当たり・純増: https://news.p-world.co.jp/articles/26064/greenbelt
- 遊技日本/P-WORLD AT基本性能: https://news.p-world.co.jp/articles/26208/nippon
- HAZUSE 型式/検定番号/基本スペック: https://hazuse.com/pachislot/3s0863/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/82423/
- パチ&スロ必勝本 BIG/EP: https://hisshobon.com/machineinfo/82415/
- なな徹 基本スペック: https://nana-press.com/kaiseki/machine/683/18697/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/683/19030/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/683/19031/
- 一撃 天井/リセット: https://1geki.jp/slot/l_codegeass/3/
- 一撃 モード/規定G: https://1geki.jp/slot/l_codegeass/43/
- ぽこすろっと 朝一/設定変更/電源OFF ON比較: https://www.nankaikoya.jp/codegeass-revival-kitaichi/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。