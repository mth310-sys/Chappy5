更新日: 2026-09-13

## 現在地点
- recordCount: **1620**
- latestRecordAdded: **パチスロ武装神姫 — No.1620**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-01-09_busou-shinki.md`
- chronologicalFrontier: **2024-01-09**
- frontierLatestMachine: **パチスロ武装神姫 — No.1620**
- schema: **resetBehavior v0.7**
- status: **2024-01-09_GROUP_CLOSED_5_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1619 `L 仮面ライダー 7RIDERS` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 最新mainがNo.1619まで進んでいたため、前回会話上のNo.1615地点へ戻らず、未処理No.1620 `パチスロ武装神姫` を性能コア + resetBehavior v0.7で追加。
- 2024-01-09群をPB・別型式・地域先行/段階導入・延期候補まで再監査し、canonical 5機でCLOSED判定。

## No.1620 — パチスロ武装神姫
- path: `docs/real_machine_db/machines/2024-01-09_busou-shinki.md`
- manufacturer: **KPE（販売・ブランド: コナミアミューズメント）**
- formalModel: **S武装神姫PF**
- inspectionCode: **2S1739**
- releaseDate: **2024-01-09**
- generation: **6.5号機 / メダル機**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.3 / 98.5 / 99.8 / 102.3 / 104.2 / 108.1%**
- CZ: **1/91.2 / 1/91.1 / 1/91.1 / 1/91.0 / 1/90.7 / 1/90.3**
- AT: **1/282.1 / 1/270.0 / 1/258.0 / 1/238.8 / 1/204.4 / 1/173.9**
- base: **34.47G/50枚（約34.5G）**
- 純増: **約3.0枚/G**
- basic AT: **1セット20G + 3～5Gの継続バトル / 継続率50・66・75・80・95%**
- 上位AT: **SUPER神姫RUSH 継続率約95% / ヒキツギ条件成立時の再突入約60% / 突入時期待枚数約3600枚（設定1）**
- normal ceiling: **CZ8連続スルー後、9回目CZでAT当選濃厚**

## No.1620 resetBehavior v0.7
- setting change: **有利区間・CZスルー天井・内部状態RESET。武装高確/逆押し高確もRESETとする機種固有解析あり**
- carry over: **据え置きは有利区間・CZスルー天井・内部状態CARRY_OVER**
- power OFF→ON: **有利区間・CZスルー天井・内部モード/状態CARRY_OVER。武装高確/逆押し高確も引継ぎとする解析あり**
- ceilingAfterReset: **短縮なし。設定変更専用のスルー回数短縮も確認なし**
- mode/state: **設定変更でRESET、据え置き/純電断でCARRY_OVER。朝一専用モード振り分けの公開固定値は再探索後も確認できず**
- advantageousSection: **設定変更RESET / 据え置き・純電断CARRY_OVER**
- resetBenefits: **設定変更後はセットアップステージ開始とする複数解析あり。セットアップステージは武装獲得高確率。ただし天井短縮等の明確な専用恩恵なし**
- resetDetection: **朝一が周期途中開始なら据え置き濃厚材料。見た目単独では判別困難。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- publicMorningNumbers: **設定変更専用の当選率/モード振り分け/短縮天井数値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_NO_NUMERIC_RESET_BONUS**

## No.1620 CONFLICT
- AT初当たり: なな徹・一撃・パチ＆スロ必勝本系は設定3 `1/258.0` / 設定4 `1/238.8` / 設定5 `1/204.4` で一致。一方、すろぱちくえすとは設定3 `1/261.0` / 設定4 `1/245.1` を掲載。平均せず複数高信頼一致値をcanonical、相違値をCONFLICT保持。
- CZ設定5: なな徹・一撃 `1/90.7` vs すろぱちくえすと `1/90.3`。平均せず前者をcanonical、後者をCONFLICT保持。
- 一部二次記事に導入日 `2023-01-09` 誤記あり。コナミ公式の2024-01-09ホール稼働開始をcanonical採用。

## 2024-01-09群 — CLOSED 5/5 canonical
1. 吉宗RISING — No.1616 DONE
2. スマスロ バイオハザード ヴィレッジ — No.1617 DONE
3. Lパチスロ マクロスフロンティア4 — No.1618 DONE
4. L 仮面ライダー 7RIDERS — No.1619 DONE
5. パチスロ武装神姫 — No.1620 DONE

境界監査:
- グリーンべると/P-WORLD 2024-01-09新台スケジュールはパチスロ4機を掲載するが、コナミ公式が `パチスロ武装神姫` のホール稼働開始を2024-01-09と明記。
- 2024年導入日順一覧と1月機種まとめは5機で一致。
- 1月22日の業界スケジュールはパチンコのみで、パチスロ新規canonical導入を確認できず。
- 次のパチスロ導入境界は **2024-02-05**。

## 次回再開地点
1. 最新mainを再同期し、No.1620と本handoffの反映を再取得確認。
2. **No.1621候補 `スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. 2024-02-05 known候補は現時点で以下8機。開始時にPB・別型式・地域先行・延期/段階導入を再監査して件数を固定する。
   - スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ
   - Lパチスロ ガールズ&パンツァー 最終章
   - スマスロ 冴えない彼女の育てかた
   - Sky Love
   - スマスロ ゴジラ対エヴァンゲリオン
   - Lストライクウィッチーズ2
   - GⅠ優駿倶楽部黄金
   - ワードオブライツⅡ
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。**次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。**
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-13
### パチスロ武装神姫
- コナミアミューズメント 公式発売発表: https://www.konami.com/amusement/corporate/ja/topics/20230925/
- コナミアミューズメント 2024-01-09ホール稼働開始告知: https://www.konami.com/amusement/corporate/ja/topics/20231225/
- 公式機種サイト: https://www.konami.com/amusement/psm/slot/busou-shinki/00_top.html
- 遊技通信web 東京都公安委員会検定通過まとめ: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
- 遊技通信/P-WORLD 型式・基本AT: https://news.p-world.co.jp/articles/25502/yugitsushin
- なな徹 基本スペック: https://nana-press.com/kaiseki/machine/647/18820/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/647/18824/
- 一撃 基本スペック/AT/ヒキツギ: https://1geki.jp/slot/s_busou_shinki/
- ぽこすろっと 朝一/電断比較: https://www.nankaikoya.jp/busoushinki-kitaichi/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/busoushinki-tenjou/
- すろぱちくえすと 設定差（CONFLICT確認）: https://www.slopachi-quest.com/article/busoushinki-settei/
- HAZUSE 型式/検定番号: https://hazuse.com/machine/pachislot/2S1739/

### 境界監査
- グリーンべると/P-WORLD 2024-01-09～2月新台スケジュール: https://news.p-world.co.jp/articles/26523/greenbelt
- 2024年導入日順一覧: https://www.slopachi-quest.com/article/2024-dounyuukisyu/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。