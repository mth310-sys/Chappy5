更新日: 2026-09-13

## 現在地点
- recordCount: **1606**
- latestRecordAdded: **L リングにかけろ1 V — No.1606**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-04_l-ring-ni-kakero1-v.md`
- chronologicalFrontier: **2023-12-04**
- frontierLatestMachine: **L リングにかけろ1 V — No.1606**
- schema: **resetBehavior v0.7**
- status: **2023-12-04_GROUP_OPEN_2_OF_7_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1605 `Lラブ嬢3～Wご指名はいかがですか？～` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoff指定どおり2023-12-04群の2機目 `L リングにかけろ1 V` をNo.1606として性能コア + resetBehavior v0.7で追加。
- 遊技日本、グリーンべると、HAZUSE、一撃、K-Navi、複数解析で導入日・型式・性能を照合。
- 設定6の機械割は公式/業界系で非公表のため、噂119%前後を補完せず `OFFICIAL_VALUE_UNDISCLOSED` とした。
- resetBehaviorは設定変更と純電源OFF→ONの比較表を複数解析系で照合。純電断では有利区間・天井・内部状態・内部モードを引き継ぎ、液晶ゲーム数のみ0へ戻る。
- 2023-12-04群はOPEN 2/7。次は `ニューシオサイ`。
- `パチスロ琉神－30 スイカバージョン` の地域テスト導入境界CONFLICTは継続。

## No.1606 — L リングにかけろ1 V
- path: `docs/real_machine_db/machines/2023-12-04_l-ring-ni-kakero1-v.md`
- manufacturer: **エフ**
- formalModel: **Lリングにかけろ1FS**
- inspectionCode: **3S1000**
- releaseDate: **2023-12-04**
- generation/system: **6.5号機 / スマスロAT / 疑似ボーナス+完走型ST**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.9 / 100.7 / 105.4 / 112.9 / 非公表%**
- ボーナス初当り: **1/189.3 / 1/185.0 / 1/179.0 / 1/161.0 / 1/138.9 / 1/121.0**
- ST初当り: **1/516.0 / 1/497.0 / 1/467.0 / 1/393.0 / 1/305.0 / 1/236.0**
- base: **約31.5G/50枚**
- 純増: **ST約0.1枚/G、ボーナス約4.5枚/G**
- normal ceiling: **最大999G+αでボーナス、ST間1500G以降のボーナスは同色BIG以上**
- reset: **有利区間・天井・内部状態・内部モードRESET、液晶G数RESET**
- carry: **有利区間・内部G/天井・状態・モードCARRY_OVER**
- pure power: **有利区間・内部G/天井・状態・モードCARRY_OVER、液晶G数のみRESET**
- reset ceiling: **999G+α → 666Gへ333G短縮**
- reset benefits: **約25%で内部チャレンジゾーン開始、稀にリーチ目高確、青チェリー規定回数30回以下**
- reset detection: **設定変更/純電断とも液晶0G・ロードワーク昼で外見同一。朝一666G非当選は据え置き濃厚材料。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED**
- record commit: **21dff0328c7d1621be34d8b79593bf09cfde95f5**

## 2023-12-04群 — OPEN 2/7 canonical
1. Lラブ嬢3～Wご指名はいかがですか？～ — No.1605 **DONE**
2. L リングにかけろ1 V — No.1606 **DONE**
3. ニューシオサイ — **NEXT**
4. L花の慶次～佐渡攻めの章 — PENDING
5. LモンキーターンV — PENDING
6. Lマジカルハロウィン8 — PENDING
7. Sクランキークレスト — PENDING

監査注記:
- 前handoffの同日7機canonical監査を継続。
- グリーンべると12/3更新一覧単独では4機掲載だが、他の当時カレンダー/実導入資料でモンキーターンV・マジカルハロウィン8・クランキークレストも12/4を確認しているため単一一覧で群件数を固定しない。
- `パチスロ琉神－30 スイカバージョン` は12/4表記DBと「12月一部地域テスト」「12/6一部地域テスト」の業界資料差があり、通常全国導入群へ混入せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY` を継続。

## resetBehavior 遡及QA進捗
- 今回は時系列本線No.1606追加を優先し、遡及QAカーソルは変更なし。
- 直前完了: `2007-07-08_marvel-heroes.md` マーベルヒーローズ — **PARTIAL_RESEARCH_EXHAUSTED**（既存COMPLETE_CORE維持）。
- 次カーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T候補。最新mainで存在/順序を再確認してから処理）。

## 次回再開地点
1. 最新mainを再同期し、No.1606と本handoffの反映を再取得確認。
2. 時系列本線は **No.1607候補 `ニューシオサイ`** から継続。
3. 性能コア + resetBehavior v0.7を同時収集する。
4. その後 `L花の慶次～佐渡攻めの章 → LモンキーターンV → Lマジカルハロウィン8 → Sクランキークレスト` の順で処理し、12/4群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
5. `パチスロ琉神－30 スイカバージョン` は12/4通常全国導入扱いに即断せず、12月一部地域テスト/12/6テスト表記の差をメーカー・業界・ホール実導入資料で確定する。
6. 遡及QAを併行する場合は `2007-07-09_genju-haou-t.md` 候補から継続。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技日本 / P-WORLDニュース: https://news.p-world.co.jp/articles/25997/nippon
- 遊技日本 検定通過: https://news.p-world.co.jp/articles/25405/nippon
- グリーンべると / P-WORLDニュース: https://news.p-world.co.jp/articles/25779/greenbelt
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/3S1000/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/3S1000/genre/207/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/3S1000/genre/203/
- 一撃 基本スペック: https://1geki.jp/slot/l_rinkake1v/39/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_rinkake1v/3/
- スロパチクエスト 朝一/天井: https://www.slopachi-quest.com/article/rinkake1v-tenjou/
- ぽこすろっと 朝一/電源OFF→ON: https://www.nankaikoya.jp/rinkake1v-kitaichi/
- ちょんぼりすた: https://chonborista.com/slot/spiky/198003/
- なな徹 ST/ボーナス: https://nana-press.com/kaiseki/machine/652/17952/
- なな徹 竜児ボーナス: https://nana-press.com/kaiseki/machine/652/17940/
- K-Navi: https://p-kn.com/slot/4054/

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
