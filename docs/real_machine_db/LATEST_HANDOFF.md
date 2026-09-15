更新日: 2026-09-15

## 現在地点
- recordCount: **1823**
- latestRecordAdded: **スマスロ タコスロ — No.1823**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- chronologicalFrontier: **2026-09-07 OPEN / PRIMARY 6 OF 6 DONE / BOUNDARY REAUDIT REQUIRED**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_PRIMARY_CANONICAL_6_OF_6_PROCESSED_BOUNDARY_TYPE_AUDIT_NEXT**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1822実レコードを再同期。
- INDEXは旧スナップショットのため `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1823 `スマスロ タコスロ` を追加し、2026-09-07 primary canonical queue 6/6を完了。
- 遊技通信/P-WORLD、グリーンべると、HAZUSE、6確、必勝本、ジャグラーズネット、ちょんぼりすた、スロベース、こぜログを横断し、性能コアとresetBehavior v0.7を収集。

## No.1823 — スマスロ タコスロ
- path: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- manufacturer: **ユニバーサルブロス**
- formalModel: **LB／タコスロBD**
- certificationNumber: **6S0085**
- releaseDate: **2026-09-07**
- settings: **1 / 2 / 5 / 6**
- payoutRate market: **98.7 / 100.5 / 103.3 / 106.2%**
- payoutRate full攻略: **100.7 / 102.6 / 105.5 / 108.5%**
- BIG: **1/324.4 / 1/318.1 / 1/309.1 / 1/297.9**
- REG: **1/352.3 / 1/336.1 / 1/312.1 / 1/300.6**
- 合算: **1/168.9 / 1/163.4 / 1/155.3 / 1/149.6**
- base: **約36.6G/50枚（設定1）**
- BIG: **最大153枚+BT、BT込み平均/期待約360〜361枚**
- REG: **最大98枚**

### No.1823 resetBehavior v0.7
- 導入後複数解析で天井非搭載。設定変更時のゲーム数/周期天井短縮はN/A。
- 設定変更専用の朝一モード、初当たり/CZ優遇、主要不利要素は多語再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
- 据え置き/純電断の天井・周期・ポイント引継ぎは公開ゲーム性上N/A。
- 設定変更/据え置き/純電断時の演出モード保持・初期化、本機固有の有利区間契約、ガックン/即時変更判別、ボーナス成立状態等の特殊契約はUNVERIFIED_AFTER_RESEARCH。
- 一般的なスマスロ/BT仕様から有利区間挙動を推測補完しない。
- 6確は天井「調査中」表記だが、導入後のジャグラーズネット/ちょんぼりすた/スロベース等は非搭載で一致するため、導入後複数一致をcanonicalとした。

## 直前境界
### 2026-08-03 — CLOSED 8/8
- L邪神ちゃんドロップキック — No.1809
- スマスロ やじきた道中記参る！ — No.1810
- Lすーぱぁびん娘 — No.1811
- スマスロ とんでもスキルで異世界放浪メシ — No.1812
- スマスロ とある魔術の禁書目録2 — No.1813
- スマスロ ストリートファイター6 — No.1814
- スロット ワールドダイスター — No.1815
- LBトリプルクラウンX-300 — No.1816

### 2026-08-17 — CLOSED 1/1
- Lパチスロ 喰霊-零-Re — No.1817

## 2026-09-07 primary canonical queue — 6/6 DONE
1. スマスロ リコリス・リコイル — No.1818 DONE
2. Lパチスロ 彼女、お借りします — No.1819 DONE
3. L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820 DONE
4. モグモグ風林火山 大海戦の巻 — No.1821 DONE
5. パチスロ 見える子ちゃん — No.1822 DONE
6. スマスロ タコスロ — No.1823 DONE

### 9/7境界監査 — NEXT
- primary 6機は完了したが、まだCLOSEDにしない。
- **LB異世界かるてっとKR**、**L/SHAMAN KING/SS** 等の9/7ホール導入記録を型式単位で監査する。
- 各候補を「未収録新規本体 / 既存機の地域導入 / 増台 / 別型式 / 新スペック / PB / 段階導入 / 日付誤記」に分類する。
- 未収録新規本体または独立すべき別スペックならNo.1824以降として同日群に追加し、性能コア+resetBehavior v0.7を収集する。
- 監査完了後のみ2026-09-07境界をCLOSED判定し、次の確定導入日へ進む。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1823:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33759/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-114030/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0085/
- 6確: https://www.kaku6.jp/slot/tacoslot/
- 必勝本: https://hisshobon.com/machineinfo/142570/
- ジャグラーズネット: https://jugglersnet.com/bt/tacoslo
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/262349/
- スロベース: https://slobase.jp/machines/takosuro
- こぜログ: https://kozelog.net/machine/universal/takosuro/

## 次回再開地点
- 最新mainを再同期しNo.1823実レコードと本handoffを確認。
- **2026-09-07境界の型式監査から再開。最優先候補 `LB異世界かるてっとKR`、次点 `L/SHAMAN KING/SS`。**
- 未収録新規本体/独立別スペックと確認できた最初の候補をNo.1824として追加する。
- 候補が既存機の地域導入/増台等なら根拠を保持してスキップし、監査を継続する。
- PARTIAL/UNVERIFIEDは型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。
