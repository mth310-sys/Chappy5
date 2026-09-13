更新日: 2026-09-13

## 現在地点
- recordCount: **1623**
- latestRecordAdded: **スマスロ 冴えない彼女の育てかた — No.1623**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_saekano.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **スマスロ 冴えない彼女の育てかた — No.1623**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_OPEN_3_OF_8_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1622 `Lパチスロ ガールズ&パンツァー 最終章` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 前handoff指定どおりNo.1623 `スマスロ 冴えない彼女の育てかた` を性能コア + resetBehavior v0.7で追加。
- 2024-02-05群はknown 8機中3機処理済み。残り5機を同日群として継続する。

## No.1623 — スマスロ 冴えない彼女の育てかた
- path: `docs/real_machine_db/machines/2024-02-05_saekano.md`
- manufacturer: **サボハニ（販売: 大都技研 / 大都販売）**
- formalModel: **Lスロット 冴えない彼女の育てかたSA3**
- inspectionCode: **330407**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.9 / 101.2 / 104.2 / 107.3 / 110.1%**
- CZ: **1/94.3 / 1/93.3 / 1/92.4 / 1/89.5 / 1/87.7 / 1/85.0**
- BONUS: **1/197.3 / 1/190.8 / 1/182.7 / 1/172.3 / 1/162.9 / 1/154.0**
- base: **約35G/50枚**
- 純増: **疑似BONUS 約3.5枚/G**
- ぷちヒロインBONUS: **約60枚**
- トリプルヒロインBONUS: **前半約100枚 + 後半10G+α / 業界資料期待値約1000枚**
- normal ceilings: **CZ間131G+α or 320G+α / BONUS間923G+α**

## No.1623 resetBehavior v0.7
- setting change: **有利区間・天井・内部状態RESET。CZ間天井を有利区間移行時振り分けで再選択**
- carry over: **有利区間・天井・内部状態CARRY_OVER**
- power OFF→ON: **天井・内部状態CARRY_OVERを機種固有比較資料で確認。純電断単独時の有利区間/CZ間天井選択状態等はUNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **BONUS間923G+αの固定短縮なし。CZ間131G+α選択率が設定1〜6で33.6 / 35.2 / 39.1 / 43.0 / 46.9 / 50.0%**
- stateAfterReset: **設定変更RESET / 据え置き・純電断CARRY_OVER。設定変更専用初期状態振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- advantageousSection: **設定変更RESET / 据え置きCARRY_OVER / 純電断単独明記はUNVERIFIED_AFTER_RESEARCH**
- resetBenefits: **CZ間131G+α選択率優遇。設定1でも33.6%、設定6は50.0%**
- resetDetection: **有利区間ランプ判別不可。液晶開始ステージ・機種固有ガックンは十分な再探索後もUNVERIFIED_AFTER_RESEARCH。131G付近CZは推測材料だが確定判別ではない**
- publicMorningNumbers: **CZ間131G+α=33.6〜50.0% / 320G+α=66.4〜50.0%（設定1→6） / BONUS間天井923G+α**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_AND_UNVERIFIED_DETECTION**

## No.1623 CONFLICT / 注記
- 採用した主要性能値と朝一CZ間天井振り分けに実質的な数値CONFLICTは確認できず。
- 導入台数は約5000台/約6000台の資料差があるが、現ミッションの必須市場実績外のため性能CONFLICTには含めない。
- 純電断時は天井/内部状態CARRY_OVERまで直接確認。有利区間等は据え置きから推測せずUNVERIFIEDを保持。

## 2024-02-05群 — OPEN 3/8 known canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — No.1622 DONE
3. スマスロ 冴えない彼女の育てかた — No.1623 DONE
4. Sky Love — NEXT
5. スマスロ ゴジラ対エヴァンゲリオン — PENDING
6. Lストライクウィッチーズ2 — PENDING
7. GⅠ優駿倶楽部黄金 — PENDING
8. ワードオブライツⅡ — PENDING

境界監査:
- 2024年2月市場資料の「2月導入新機種8機」とknown 8機の件数は整合済み。
- 群CLOSED前に各機処理後、PB・別型式・地域先行/段階導入・延期候補を再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1623と本handoffの反映を再取得確認。
2. **No.1624候補 `Sky Love`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. その後、`スマスロ ゴジラ対エヴァンゲリオン` → `Lストライクウィッチーズ2` → `GⅠ優駿倶楽部黄金` → `ワードオブライツⅡ` の順で同日群を継続。
4. 8機処理後に2024-02-05群のPB・別型式・地域先行/段階導入・延期候補を再監査し、CLOSED判定する。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-13
### スマスロ 冴えない彼女の育てかた
- 遊技日本/P-WORLD 型式・製造元・設定別初当たり/出玉率: https://news.p-world.co.jp/articles/26542/nippon
- Amusement Japan 2024-02-05導入・純増・設定1 CZ/初当たり: https://amusement-japan.co.jp/article/detail/10004051/
- グリーンべると 導入日・初当たり・出玉率・ベース・救済機能: https://web-greenbelt.jp/post-79626/
- 遊技通信web 型式・製造元・疑似BONUS構成・純増: https://www.yugitsushin.jp/news/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%81%AB%E3%82%82%E9%81%8A%E3%81%B3%E3%82%84%E3%81%99%E3%81%95%E3%82%92%EF%BC%81%E3%80%8C%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88-%E5%86%B4%E3%81%88%E3%81%AA%E3%81%84/
- HAZUSE 型式/検定番号: https://hazuse.com/en/machine/pachislot/SX0066/
- パチ7 設定別初当たり/出玉率・ベース・天井: https://pachiseven.jp/machines/6868/cutout/2
- 日刊SPA! BONUS基本性能: https://nikkan-spa.jp/1977464
- なな徹 朝一/設定変更/据え置き・有利区間・リセット判別: https://nana-press.com/kaiseki/machine/682/19175/
- なな徹 CZ間天井振り分け: https://nana-press.com/kaiseki/machine/682/19172/
- 一撃 天井/朝一/電源OFF ON調査状況: https://1geki.jp/slot/l_sae_kano/3/
- 一撃 基本スペック: https://1geki.jp/slot/l_sae_kano/
- ちょんぼりすた 設定変更/電源OFF ON時の天井・内部状態比較: https://chonborista.com/slot/daito-slot/202042/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
