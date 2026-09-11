更新日: 2026-09-11

## 現在地点
- recordCount: **1323**
- latestRecordAdded: **ドリームクルーン2 — No.1323**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-02_dream-crune2.md`
- chronologicalFrontier: **2019-12-02**
- frontierLatestMachine: **ドリームクルーン2 — No.1323**
- schema: **resetBehavior v0.7**
- status: **2019_12_02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1320「パチスロ トータル・イクリプス2」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- main上で同名既存レコードなしを逐次確認し、12/02群の残り3機を追加。
  - **No.1321 マジカルハロウィン7**
  - **No.1322 パチスロ ルパン三世～イタリアの夢～**
  - **No.1323 ドリームクルーン2**
- 3機とも性能コアとresetBehavior v0.7を同時収集。最初の検索で欠損判定せず、型式/メーカー/シリーズ/設定変更/朝一/据え置き/純電断/天井/モード/有利区間/ガックンを変えて公式・業界記事・当時解析・旧DBを横断。
- 2019-12-02群は導入カレンダー再監査で既知6機が一致し、**CLOSED_AFTER_CROSS_SOURCE_AUDIT**へ移行。

## No.1321 — マジカルハロウィン7
- path: `docs/real_machine_db/machines/2019-12-02_magical-halloween7.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **`Sマジカルハロウィン7KU`**
- certificationNumber: **PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 疑似ボーナス+CZ+ST型AT**
- payout: **98.3 / 99.5 / 100.7 / 103.4 / 105.0 / 108.1%**
- ボーナス合算: **1/232.5 / 222.3 / 210.9 / 187.7 / 173.4 / 156.1**
- AT初当たり: **1/641.7 / 594.8 / 547.9 / 466.6 / 420.5 / 354.9**
- base: **約50.9G/50枚**
- 純増: **AT約1～3枚/G / 疑似ボ約5枚/G**
- basic payout: 黒BAR BIG 200枚+α / 赤7 BIG 100枚+α / REG 50枚+α / AT1セット30G以上
- 天井: **573G+αでボーナス以上**
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1321
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_ENTRY_NUMBERS**
- 設定変更: **天井RESET / 有利区間RESET / 非有利区間へ**。
- 純電源OFF→ON: **天井・有利区間CARRY_OVER**。
- 有利区間移行1G目は高確以上/CZ抽選。CZ当選率はモードA/B/C/Dで **2.0 / 10.6 / 38.3 / 62.5%**。これは設定変更専用値ではなく有利区間移行時共通値として保存。
- 通常時有利区間ランプ消灯タイプで、ランプ単独変更判別不可。
- 当時攻略ではガックン確認なし。コナミ公式スタッフ回答でもカスタム/演出面から設定変更は見抜けない。
- 設定変更専用モードA～D振り分け、純電断時の内部モード/状態独立契約は未固定。

### No.1321 CONFLICT
- 導入日はコナミ公式PV・K-Navi等が **2019-12-02**。早期単一解析に **2019-11-05** 表記が残るため平均せず、公式12/2をcanonical、11/5は事前情報段階の誤記/予定混同として保持。

## No.1322 — パチスロ ルパン三世～イタリアの夢～
- path: `docs/real_machine_db/machines/2019-12-02_lupin-italian-dream.md`
- manufacturer: **オリンピア（販売: 平和）**
- formalModel: **`Sルパン三世イタリアの夢H5`**
- certificationNumber: **`9S0828`**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 高純増疑似ボーナス+1G連**
- payout: **97.3 / 99.0 / 101.3 / 104.8 / 109.7 / 112.8%**
- 初当たり: **1/421.4 / 396.6 / 367.6 / 337.1 / 297.1 / 277.3**
- base: **約51.7～52.0G/50枚**
- 純増: **約9.0枚/G**
- basic payout: MAX BONUS **34G / 約306枚**、LUPIN BONUS **15枚役ナビ5回 / 約60枚**
- 天井: **766G+α**
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1322
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_STRONG_DETECTION_SIGNALS**
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET・非有利区間へ**。
- 据え置き/純電断: **内部天井G・内部状態・有利区間CARRY_OVER**。メニュー画面は0Gへ戻るため表示Gと内部Gを分離。
- 朝一有利区間ランプ **点灯=据え置き濃厚 / 消灯=設定変更濃厚**。開店前対策等の例外があるため確定扱いしない。
- 不二子ポイント高確率の実戦上内部G帯 **1～99 / 200～249 / 400～449 / 600～649 / 750G～**を、内部Gズレによる補助変更判別値として保存。
- 設定変更専用短縮天井/固定恩恵はなし確認。

## No.1323 — ドリームクルーン2
- path: `docs/real_machine_db/machines/2019-12-02_dream-crune2.md`
- manufacturer: **オーイズミ**
- formalModel: **`Sドリームクルーン2CX`**
- certificationNumber: **`9S0550`**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 疑似ボーナス・権利物風**
- payout: **97.4 / 98.9 / 103.0 / 107.0%**（設定1/2/5/6）
- AT初当たり: **1/698.1 / 630.4 / 504.3 / 421.9**
- クルーン&ルーレット: **1/128.8 / 122.8 / 119.0 / 112.3**
- base: **約53.6～53.7G/50枚**
- 純増: **約3.1枚/G**
- basic payout: **1権利約500枚 / 3回権利約1500枚 / AT後32Gくるくるタイム**
- 通常ゲーム数天井: **NONE_CONFIRMED**（後年整理では「–」）
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1323
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- 1geki当時専用ページ自体が設定変更/電源OFF ON時の天井・状態・モード・ステージをすべて「調査中」としていた。
- 型式`Sドリームクルーン2CX`/検定`9S0550`/OIZUMIを含め検索語変更し、HAZUSE・K-Navi・パチマガスロマガ・ちょんぼりすた・業界記事まで横断したが、本機固有の設定変更/据え置き/純電断の内部契約を固定できず。
- 通常時モードA/B/Cの存在は固定できたが、リセット時のモード選択/引継ぎは未固定。
- 有利区間ランプ朝一契約、ガックン、初期出目、公開朝一専用数値も未固定。一般6号機挙動から補完しない。

## 2019-12-02群 — CLOSED
1. **喰霊-零- 運命乱～うんめいのみだれ～** — No.1318
2. **天下布武4** — No.1319
3. **パチスロ トータル・イクリプス2** — No.1320
4. **マジカルハロウィン7** — No.1321
5. **パチスロ ルパン三世～イタリアの夢～** — No.1322
6. **ドリームクルーン2** — No.1323

複数の当時導入カレンダーで12/2パチスロ6機が一致。全メーカー/別型式/別スペック/PB/地域差まで再監査し、現時点で追加の12/2機を固定できなかったため **`2019_12_02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`**。

## 次の時系列群 — 2019-12-09候補
当時導入カレンダーで少なくとも以下2機を確認済み。
1. **パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO**（サミー） — **No.1324候補**
2. **S沖っ娘25**（サンセイR&D） — **No.1325候補**

次回は12/03～12/08境界を再監査してから12/09群を開始し、群完了後に同日追加/PB/地域差/別型式をCLOSED監査する。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。P-WORLDで2019-12-02時点の機種DB掲載は確認済みだが、具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- 11/06～12/01の追加機、PB、地域差、別型式は新証拠が出た場合のみ遡及追加。
- 並行更新対策として、毎回mainの同名ファイル存在確認後にcreate/updateする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は本線12/02群残り3機の完了と群CLOSEDを優先し、既存性能値の再調査は実施しなかった。
- 次の未formalized候補は **`2007-03_wild7.md`（ワイルド7）**。main上で`resetBehaviorQA: PARTIAL`のため、次回以降v0.7 formalize対象。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1323を再取得。
2. 2019-12-03～12-08境界を再監査。
3. **2019-12-09「パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO」No.1324候補**を性能コア＋resetBehavior v0.7で収集。
4. 続けて **S沖っ娘25 No.1325候補**。
5. 12/09群完了後、全メーカー/別型式/別スペック/PB/地域差を横断監査してCLOSED可否判定。
6. 遡及QAは **`2007-03_wild7.md`** から継続。既formalizedなら重複編集せず次へ進む。

## 主要出典 — 取得日 2026-09-11

### No.1321 マジカルハロウィン7
- KONAMI公式PV: https://www.youtube.com/watch?v=RC0HQdQkOkM
- KONAMI公式スタッフQ&A: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200124.html
- 娯楽産業: https://www.goraku-sangyo.com/%E3%82%B3%E3%83%8A%E3%83%9F%E3%82%A2%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%A1%E3%83%B3%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%9E%E3%82%B8%E3%82%AB%E3%83%AB%E3%83%8F%E3%83%AD/
- P-WORLD: https://www.p-world.co.jp/machine/database/9061/
- K-Navi: https://p-kn.com/slot/3325/
- スロぱちクエスト: https://www.slopachi-quest.com/article/magical-halloween7-tennjou/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/12/09/majiharo7_tennjyou/
- すろかい: https://slotkaiseki.hatenablog.com/entry/majiharo7
- P-MEDIA JAPAN: https://p-media.info/post-22869/

### No.1322 ルパン三世～イタリアの夢～
- 平和2019 NEWS: https://www.heiwanet.co.jp/news/2019/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/11933/yugitsushin
- K-Navi: https://p-kn.com/slot/3333/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0828/
- すろかい: https://slotkaiseki.hatenablog.com/entry/lupinitaly
- スロぱちクエスト: https://www.slopachi-quest.com/article/rupin-the-3rd-italy-tennjou/
- 期待値見える化: https://slotjin.com/slot/lupinitaly-reset/

### No.1323 ドリームクルーン2
- PiDEA発売記事: https://www.pidea.jp/articles/6%E5%8F%B7%E6%A9%9F%E3%81%A7%E3%82%82%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B3%E5%81%A5%E5%9C%A8%E3%80%8C%E3%83%89%E3%83%AA%E3%83%BC%E3%83%A0%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%B32%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F
- グリーンべると検定: https://web-greenbelt.jp/00011556/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0550/
- 1geki機種概要: https://1geki.jp/slot/s_dc2/
- 1geki設定変更/電断: https://1geki.jp/slot/s_dc2/3/
- 1gekiベース: https://1geki.jp/slot/s_dc2/4/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/95079/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/46/a.php

### 12/02群監査 / 次群
- 2019新台導入カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 12/02機種まとめ後半: https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/12/02/001633
